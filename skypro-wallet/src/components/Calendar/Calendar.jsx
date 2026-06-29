import { useMemo } from "react";

import {
  Wrapper,
  Title,
  Subtitle,
  WeekDays,
  DaysWrapper,
  Grid,
  EmptyDay,
  Day,
} from "./Calendar.styled";

const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const monthNames = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

const today = new Date();
const initialDay = {
  day: today.getDate(),
  monthNumber: today.getMonth(),
  year: today.getFullYear(),
};

const getDateId = ({ year, monthNumber, day }) => {
  const month = String(monthNumber + 1).padStart(2, "0");
  const date = String(day).padStart(2, "0");

  return `${year}-${month}-${date}`;
};

const getPeriodDay = ({ year, monthNumber, day }) => ({
  day,
  month: monthNames[monthNumber],
  monthNumber,
  year,
  order: new Date(year, monthNumber, day).getTime(),
});

const getMonthData = (date) => {
  const year = date.getFullYear();
  const monthNumber = date.getMonth();
  const firstDay = new Date(year, monthNumber, 1).getDay();
  const startOffset = firstDay === 0 ? 6 : firstDay - 1;
  const daysCount = new Date(year, monthNumber + 1, 0).getDate();

  return {
    id: `${year}-${String(monthNumber + 1).padStart(2, "0")}`,
    year,
    monthNumber,
    title: date.toLocaleString("ru-RU", {
      month: "long",
      year: "numeric",
    }),
    startOffset,
    days: Array.from({ length: daysCount }, (_, index) => index + 1),
  };
};

const getCalendarMonths = (startYear, endYear) => {
  const months = [];

  for (let year = startYear; year <= endYear; year += 1) {
    for (let month = 0; month < 12; month += 1) {
      months.push(getMonthData(new Date(year, month, 1)));
    }
  }

  return months;
};

const getSelectedDaysFromPeriod = (selectedPeriod) => {
  if (!selectedPeriod.length) {
    return [];
  }

  return selectedPeriod.map((day) =>
    getDateId({
      year: day.year,
      monthNumber: day.monthNumber,
      day: day.day,
    }),
  );
};

const getDateFromId = (id) => {
  const [year, month, day] = id.split("-").map(Number);

  return new Date(year, month - 1, day);
};

const getDateIdFromDate = (date) =>
  getDateId({
    year: date.getFullYear(),
    monthNumber: date.getMonth(),
    day: date.getDate(),
  });

const getDaysBetween = (firstId, secondId) => {
  const firstDate = getDateFromId(firstId);
  const secondDate = getDateFromId(secondId);
  const startDate = firstDate <= secondDate ? firstDate : secondDate;
  const endDate = firstDate <= secondDate ? secondDate : firstDate;
  const days = [];
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    days.push(getDateIdFromDate(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return days;
};

const getNextSelectedDays = (selectedDays, id) => {
  if (selectedDays.length === 1 && selectedDays[0] !== id) {
    return getDaysBetween(selectedDays[0], id);
  }

  return [id];
};

function Calendar({
  selectedPeriod,
  setSelectedPeriod,
  startYear = today.getFullYear() - 1,
  endYear = today.getFullYear() + 1,
}) {
  const months = useMemo(
    () => getCalendarMonths(startYear, endYear),
    [startYear, endYear],
  );
  const selectedDays = useMemo(() => {
    const daysFromPeriod = getSelectedDaysFromPeriod(selectedPeriod);

    return daysFromPeriod.length > 0 ? daysFromPeriod : [getDateId(initialDay)];
  }, [selectedPeriod]);

  const updateSelectedPeriod = (newSelectedDays) => {
    const period = newSelectedDays
      .map((id) => {
        const [year, monthNumber, day] = id.split("-").map(Number);

        return getPeriodDay({
          year,
          monthNumber: monthNumber - 1,
          day,
        });
      })
      .sort((a, b) => a.order - b.order);

    setSelectedPeriod(period);
  };

  const handleSelect = (month, day) => {
    const id = getDateId({
      year: month.year,
      monthNumber: month.monthNumber,
      day,
    });
    const newSelectedDays = getNextSelectedDays(selectedDays, id);

    updateSelectedPeriod(newSelectedDays);
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
        {months.map((month) => {
          return (
            <div key={month.id}>
              <Subtitle>{month.title}</Subtitle>

              <Grid>
                {Array.from({ length: month.startOffset }, (_, index) => (
                  <EmptyDay key={`${month.id}-empty-${index}`} />
                ))}

                {month.days.map((day) => {
                  const id = getDateId({
                    year: month.year,
                    monthNumber: month.monthNumber,
                    day,
                  });

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
          );
        })}
      </DaysWrapper>
    </Wrapper>
  );
}

export default Calendar;
