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

const weekDays = [

  "Пн",

  "Вт",

  "Ср",

  "Чт",

  "Пт",

  "Сб",

  "Вс",

];

const months = [

  {

    title: "Июль 2024",

    monthName: "июля",

    days: Array.from(

      { length: 31 },

      (_, i) => i + 1

    ),

  },

  {

    title: "Август 2024",

    monthName: "августа",

    days: Array.from(

      { length: 31 },

      (_, i) => i + 1

    ),

  },

];

function Calendar({

  setSelectedPeriod,

}) {

  const [selectedDays, setSelectedDays] = useState([

    "Июль 2024-10",

    "Июль 2024-14",

  ]);

  const handleSelect = (

    month,

    monthName,

    day

  ) => {

    const id = `${month}-${day}`;

    const newSelected =

      selectedDays.includes(id)

      ?

      selectedDays.filter(

        item => item !== id

      )

      :

      [

        ...selectedDays,

        id,

      ];

    setSelectedDays(

      newSelected

    );

    const period =

      newSelected

      .map(item => {

        const [

          month,

          day,

        ] = item.split("-");

        return {

          day:Number(day),

          month:

          month ===

          "Июль 2024"

          ?

          "июля"

          :

          "августа",

          year:2024,

          order:

          month ===

          "Июль 2024"

          ?

          0

          :

          1,

        };

      })

      .sort(

        (a,b)=>{

          if(

            a.order===

            b.order

          ){

            return(

              a.day-

              b.day

            );

          }

          return(

            a.order-

            b.order

          );

        }

      );

    setSelectedPeriod(

      period

    );

  };

  return (

    <Wrapper>

      <Title>

        Период

      </Title>

      <WeekDays>

        {

          weekDays.map(

            day=>(

              <div

                key={day}

              >

                {day}

              </div>

            )

          )

        }

      </WeekDays>

      <DaysWrapper>

        {

          months.map(

            month=>(

              <div

                key={

                  month.title

                }

              >

                <Subtitle>

                  {

                    month.title

                  }

                </Subtitle>

                <Grid>

                  {

                    month.days.map(

                      day=>{

                        const id=

                        `${month.title}-${day}`;

                        return(

                          <Day

                            key={id}

                            active={

                              selectedDays.includes(id)

                            }

                            onClick={()=>

                              handleSelect(

                                month.title,

                                month.monthName,

                                day

                              )

                            }

                          >

                            {day}

                          </Day>

                        );

                      }

                    )

                  }

                </Grid>

              </div>

            )

          )

        }

      </DaysWrapper>

    </Wrapper>

  );

}

export default Calendar;