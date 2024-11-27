import style from "@styles/componentStyles/DayOfWeek.module.scss";

type Props = {
    selectedClassroom: number;
};

export default function DayOfWeek({ selectedClassroom }: Props) {
    const days = [/*"日曜日",*/ "月曜日", "火曜日", "水曜日", "木曜日", "金曜日" /*, "土曜日"*/];

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
                        {day}
                    </button>
                ))}
            </div>
        </div>
    );
}
