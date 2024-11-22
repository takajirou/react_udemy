import style from "@styles/componentStyles/DayOfWeek.module.scss";

export default function dayOfWeek() {
    const days = ["月", "火", "水", "木", "金"];

    return (
        <div>
            {days.map((day) => (
                <button className={style.button} key={day}>
                    {day}
                </button>
            ))}
        </div>
    );
}
