"use client";

import style from "@styles/componentStyles/DayOfWeek.module.scss";

// import React, { useState, useEffect } from "react";

export default function DayOfWeek() {
    const days = [/*"日曜日",*/ "月曜日", "火曜日", "水曜日", "木曜日", "金曜日" /*, "土曜日"*/];

    // const [data, setData] = useState<{ weekday?: number } | null>(null);
    // const [error, setError] = useState<string | null>(null);

    // // APIからデータを取得
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const apiUrl =
    //             "https://click.ecc.ac.jp/ecc/webdesign/wdct/api/v1/openrooms/timetables/?classroom=2404&weekday=1";

    //         try {
    //             const response = await fetch(apiUrl);
    //             if (!response.ok) {
    //                 throw new Error(`HTTPエラー: ${response.status}`);
    //             }

    //             const result = await response.json();
    //             setData(result);
    //         } catch (error: unknown) {
    //             if (error instanceof Error) {
    //                 setError(error.message);
    //             } else {
    //                 setError(String(error));
    //             }
    //         }
    //     };

    //     fetchData();
    // }, []);

    // if (error) {
    //     return <div className={style.error}>エラー: {error}</div>;
    // }

    // if (!data) {
    //     return <div className={style.loading}>読み込み中...</div>;
    // }

    // const weekday = data.weekday !== undefined ? data.weekday : 1;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const buttons = document.querySelectorAll(`.${style.button}`);
        buttons.forEach((button) => button.classList.remove(style.selected));

        const clickedButton = event.currentTarget;
        clickedButton.classList.add(style.selected);
    };

    return (
        <div className={style.container}>
            <div className={style.btnWrap}>
                {days.map((day, index) => (
                    <button className={`${style.button}`} key={day} onClick={handleClick}>
                        {/* {days[weekday === index ? index : (index + weekday) % 7]} */}
                        {day}
                    </button>
                ))}
            </div>
        </div>
    );
}
