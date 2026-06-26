import { Bar, BarChart, Cell, LabelList, ResponsiveContainer, Tooltip, XAxis } from "recharts";

import { Wrapper, Amount, Subtitle } from "./Chart.styled";

const data = [
  {
    name: "Еда",
    value: 3590,
    label: "3 590 ₽",
    color: "#CDB2FF",
  },
  {
    name: "Транспорт",
    value: 1835,
    label: "1 835 ₽",
    color: "#F7B733",
  },
  {
    name: "Жилье",
    value: 35,
    label: "0 ₽",
    color: "#7DD3FC",
  },
  {
    name: "Развлечения",
    value: 1250,
    label: "1 250 ₽",
    color: "#A78BFA",
  },
  {
    name: "Образование",
    value: 600,
    label: "600 ₽",
    color: "#B8E986",
  },
  {
    name: "Другое",
    value: 2306,
    label: "2 306 ₽",
    color: "#F6B0C8",
  },
];

function Chart({ selectedPeriod }) {
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
      <Amount>9 581 ₽</Amount>

      <Subtitle>Расходы за {periodText}</Subtitle>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart
          data={data}
          margin={{
            top: 35,
            right: 0,
            left: 0,
            bottom: 0,
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

          <Tooltip formatter={(value, name, props) => [props.payload.label, "Сумма"]} />

          <Bar dataKey="value" barSize={70} radius={[18, 18, 18, 18]}>
            <LabelList
              dataKey="label"
              position="top"
              style={{
                fontSize: 15,
                fontWeight: 700,
                fill: "#111",
              }}
            />

            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}

export default Chart;
