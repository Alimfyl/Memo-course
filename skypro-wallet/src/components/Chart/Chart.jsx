import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Wrapper, Amount, Subtitle } from "./Chart.styled";

const categories = [
  {
    name: "Еда",
    color: "#CDB2FF",
  },
  {
    name: "Транспорт",
    color: "#F7B733",
  },
  {
    name: "Жилье",
    color: "#7DD3FC",
  },
  {
    name: "Развлечения",
    color: "#A78BFA",
  },
  {
    name: "Образование",
    color: "#B8E986",
  },
  {
    name: "Другое",
    color: "#F6B0C8",
  },
];

const formatMoney = (value) => {
  return `${Number(value).toLocaleString("ru-RU")} ₽`;
};

function Chart({ selectedPeriod, transactions }) {
  const totalAmount = transactions.reduce((sum, transaction) => {
    return sum + Number(transaction.amount);
  }, 0);

  const data = categories.map((category) => {
    const categoryAmount = transactions
      .filter((transaction) => transaction.category === category.name)
      .reduce((sum, transaction) => {
        return sum + Number(transaction.amount);
      }, 0);

    return {
      name: category.name,
      value: categoryAmount,
      label: formatMoney(categoryAmount),
      color: category.color,
    };
  });

  const maxCategoryAmount = Math.max(...data.map((item) => item.value), 0);
  const minVisibleBarValue = maxCategoryAmount > 0 ? maxCategoryAmount * 0.04 : 0.4;
  const maxVisibleBarValue = maxCategoryAmount > 0 ? maxCategoryAmount : 10;
  const chartData = data.map((item) => ({
    ...item,
    displayValue: item.value > 0 ? item.value : minVisibleBarValue,
  }));

  const firstPeriodDay = selectedPeriod[0];
  const lastPeriodDay = selectedPeriod[selectedPeriod.length - 1];

  const periodText =
    selectedPeriod.length === 0
      ? "выбранный период"
      : selectedPeriod.length === 1
        ? `${firstPeriodDay.day} ${firstPeriodDay.month} ${firstPeriodDay.year}`
        : `${firstPeriodDay.day} ${firstPeriodDay.month} ${firstPeriodDay.year} - ${lastPeriodDay.day} ${lastPeriodDay.month} ${lastPeriodDay.year}`;

  return (
    <Wrapper>
      <Amount>{formatMoney(totalAmount)}</Amount>

      <Subtitle>Расходы за {periodText}</Subtitle>

      <ResponsiveContainer width="100%" height={365}>
        <BarChart
          data={chartData}
          margin={{
            top: 42,
            right: 10,
            left: 10,
            bottom: 8,
          }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            interval={0}
            tick={{
              fontSize: 14,
              fill: "#2A2A2A",
            }}
          />
          <YAxis hide domain={[0, maxVisibleBarValue]} />

          <Tooltip
            cursor={{ fill: "transparent" }}
            formatter={(value, name, props) => [
              props.payload.label,
              "Сумма",
            ]}
          />

          <Bar dataKey="displayValue" barSize={70} radius={[12, 12, 12, 12]}>
            <LabelList
              dataKey="label"
              position="top"
              style={{
                fontSize: 15,
                fontWeight: 700,
                fill: "#111",
              }}
            />

            {chartData.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}

export default Chart;
