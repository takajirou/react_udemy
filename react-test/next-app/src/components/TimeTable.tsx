import DayOfWeek from "@/components/DayOfWeek";
import ClassWork from "@/components/ClassWork";
import { useState } from "react";
import styles from "@styles/componentStyles/TimeTable.module.scss";

type Props = {
    selectedClassroom: number;
};

export default function TimeTable({ selectedClassroom }: Props) {
    const [selectedDayIndex, setSelectedDayIndex] = useState(0);

    const handleDayClick = (index: number) => {
        setSelectedDayIndex(index);
    };

    return (
        <div>
            <DayOfWeek onDayClick={handleDayClick} />

            <div className={styles.classWorkWrap}>
                <h2>空き教室</h2>

                <ClassWork
                    selectedClassroom={selectedClassroom}
                    selectedDayIndex={selectedDayIndex + 1}
                />
            </div>
        </div>
    );
}
