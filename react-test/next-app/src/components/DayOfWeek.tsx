import React from "react";
import styles from "@styles/componentStyles/DayOfWeek.module.scss";

type DayOfWeekProps = {
    onDayClick: (index: number) => void;
};

export default function DayOfWeek({ onDayClick }: DayOfWeekProps) {
    const days = ["月曜日", "火曜日", "水曜日", "木曜日", "金曜日"];

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
        const buttons = document.querySelectorAll(`.${styles.button}`);
        buttons.forEach((button) => button.classList.remove(styles.selected));

        const clickedButton = event.currentTarget;
        clickedButton.classList.add(styles.selected);

        onDayClick(index);
    };

    return (
        <div className={styles.container}>
            <div className={styles.btnWrap}>
                {days.map((day, index) => (
                    <button
                        className={`${styles.button}`}
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
