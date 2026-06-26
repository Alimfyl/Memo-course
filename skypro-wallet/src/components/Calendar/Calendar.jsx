import { useState } from "react";

import {
  Wrapper,
  Title,
  Subtitle,
  WeekDays,
  DaysWrapper,
  Grid,
  Day,
} from "./Calendar.styled";

const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const months = [
  {
    title: "Июль 2024",
    monthName: "июля",
    order: 0,
    startOffset: 0,
    days: Array.from({ length: 31 }, (_, i) => i + 1),
  },
  {
    title: "Август 2024",
    monthName: "августа",
    order: 1,
    startOffset: 3,
    days: Array.from({ length: 31 }, (_, i) => i + 1),
  },
];

function Calendar({ setSelectedPeriod }) {
  const [selectedDays, setSelectedDays] = useState(["Июль 2024-10"]);

  const handleSelect = (month, day) => {
    const id = `${month.title}-${day}`;
    const newSelected = selectedDays.includes(id)
      ? selectedDays.filter((item) => item !== id)
      : [...selectedDays, id];

    setSelectedDays(newSelected);

    const period = newSelected
      .map((item) => {
        const [monthTitle, selectedDay] = item.split("-");
        const selectedMonth = months.find(({ title }) => title === monthTitle);

        return {
          day: Number(selectedDay),
          month: selectedMonth.monthName,
          year: 2024,
          order: selectedMonth.order,
        };
      })
      .sort((a, b) => (a.order === b.order ? a.day - b.day : a.order - b.order));

    setSelectedPeriod(period);
  };

  return (
    <Wrapper>
      <Title>Период</Title>

      <WeekDays>
        {weekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </WeekDays>

      <DaysWrapper>
        {months.map((month) => (
          <div key={month.title}>
            <Subtitle>{month.title}</Subtitle>

            <Grid>
              {Array.from({ length: month.startOffset }, (_, index) => (
                <div key={`${month.title}-empty-${index}`} />
              ))}

              {month.days.map((day) => {
                const id = `${month.title}-${day}`;

                return (
                  <Day
                    key={id}
                    $active={selectedDays.includes(id)}
                    onClick={() => handleSelect(month, day)}
                    type="button"
                  >
                    {day}
                  </Day>
                );
              })}
            </Grid>
          </div>
        ))}
      </DaysWrapper>
    </Wrapper>
  );
}

export default Calendar;
