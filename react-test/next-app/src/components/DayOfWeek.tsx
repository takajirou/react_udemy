"use client";

import style from "@styles/componentStyles/DayOfWeek.module.scss";
import { useState } from "react";

export default function DayOfWeek() {
    const days = ["月曜日", "火曜日", "水曜日", "木曜日", "金曜日"];

    const [buttonColors, setButtonColors] = useState(
        days.reduce((acc, day) => {
            acc[day] = { buttonColor: "#efefef", textColor: "#373737" };
            return acc;
        }, {} as { [key: string]: { buttonColor: string; textColor: string } })
    );

    const handleClick = (day: string) => {
        setButtonColors((prevState) => {
            const newState = { ...prevState };
            for (const key in newState) {
                newState[key] = { buttonColor: "#efefef", textColor: "#373737" };
            }
            newState[day] = {
                buttonColor: newState[day].buttonColor === "#efefef" ? "#373737" : "#efefef",
                textColor: newState[day].textColor === "#373737" ? "#efefef" : "#373737",
            };
            return newState;
        });
    };

    return (
        <div className={style.btnWrap}>
            {days.map((day) => (
                <button
                    className={style.button}
                    key={day}
                    style={{
                        backgroundColor: buttonColors[day].buttonColor,
                        color: buttonColors[day].textColor,
                    }}
                    onClick={() => handleClick(day)} // ボタンごとにクリック処理を渡す
                >
                    {day}
                </button>
            ))}
        </div>
    );
}
