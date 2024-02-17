import { LocalizationProvider, StaticDatePicker, ukUA } from "@mui/x-date-pickers";
import "./Calendar.css"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import { useState } from "react";
interface Calendar{
   closeCalendar:()=>void
}



const Calendar:React.FC<Calendar>= ({closeCalendar}) => {
    const [date,setDate]=useState<number[]>([2022,4,17])
    console.log(date);

    return (
        <LocalizationProvider localeText={ukUA.components.MuiLocalizationProvider.defaultProps.localeText} dateAdapter={AdapterDayjs} >
            <div className="calendar-container">
                        <StaticDatePicker
                            localeText={{toolbarTitle:`${date[0]}`, okButtonLabel:"Обрати", cancelButtonLabel:"Скасувати"} }
                            sx={{
                                "& .MuiPickersDay-root": {
                                  "&.Mui-selected": {
                                    backgroundColor: "red",
                                  },
                                },



                            }
                            }
                            className={"MuiPickersToolbar-toolbar"}

                            onChange={(value)=>{
                                value && setDate([value.get("year"),value.get("month"),value.get("date")])

                            }}
                            defaultValue={dayjs('2022-04-17')}
                            orientation="landscape" />

            </div>
        </LocalizationProvider>
    );
};

export default Calendar;