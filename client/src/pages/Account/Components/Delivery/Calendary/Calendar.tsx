import { LocalizationProvider,  StaticDatePicker,  ukUA } from "@mui/x-date-pickers";
import "./Calendar.css"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from "dayjs";
import { FC, useState } from "react";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";


interface Calendar{
    handleDataAccept: () => void
    closeCalendar:()=>void
}


const Calendar:FC<Calendar>= ({handleDataAccept,closeCalendar}) => {
    const [date,setDate]=useState<number[]>([2022,4,17])

    function ActionList() {

        return (
          // Propagate the className such that CSS selectors can be applied
          <List>
            <ListItem key={"Скасувати"} disablePadding>
                <ListItemButton onClick={closeCalendar}>
                  <ListItemText className="item" primary={"Скасувати"} />
                </ListItemButton>
              </ListItem>
            <ListItem key={"Обрати"} disablePadding>
                <ListItemButton onClick={ handleDataAccept}>
                  <ListItemText className="item last" primary={"Обрати"} />
                </ListItemButton>
              </ListItem>

          </List>
        );
      }

    return (
        <LocalizationProvider localeText={ukUA.components.MuiLocalizationProvider.defaultProps.localeText} dateAdapter={AdapterDayjs} >
            <div className="calendar-container">
                        <StaticDatePicker
                            localeText={{toolbarTitle:`${date[0]}`, okButtonLabel:"Обрати", cancelButtonLabel:"Скасувати"} }
                            onAccept={()=>{handleDataAccept()}}

                            slots={{
                                actionBar: ActionList,
                              }}

                            sx={{
                                "& .MuiPickersDay-root": {
                                  "&.Mui-selected": {
                                    backgroundColor: "red",
                                  },
                                },
                                "& .MuiList-root":{display:"flex", gridColumn:"1/4",gridRow:"3"},
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