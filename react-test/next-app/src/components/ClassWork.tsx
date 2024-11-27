type Props = {
    selectedClassroom: number;
    selectedDayIndex: number;
};

export default function ClassWork(props: Props) {
    return (
        <div>
            {props.selectedClassroom}
            {props.selectedDayIndex}
        </div>
    );
}
