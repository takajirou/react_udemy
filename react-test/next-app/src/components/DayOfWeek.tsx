import React, { useEffect, useState } from "react";
import styles from "@styles/componentStyles/DayOfWeek.module.scss";

type DayOfWeekProps = {
    onDayClick: (index: number) => void;
};

export default function DayOfWeek({ onDayClick }: DayOfWeekProps) {
    const days = ["月曜日", "火曜日", "水曜日", "木曜日", "金曜日"];
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
        setSelectedIndex(index);
        onDayClick(index);
    };

    useEffect(() => {
        const buttons = document.querySelectorAll(`.${styles.button}`);
        if (buttons[selectedIndex]) {
            buttons[selectedIndex].classList.add(styles.selected);
        }
    }, [selectedIndex]);

    return (
        <div className={styles.container}>
            <div className={styles.btnWrap}>
                {days.map((day, index) => (
                    <button
                        className={`${styles.button} ${
                            index === selectedIndex ? styles.selected : ""
                        }`}
                        key={day}
                        onClick={(event) => handleClick(event, index)}
                    >
                        {day}
                    </button>
                ))}
            </div>
        </div>
    );
}
