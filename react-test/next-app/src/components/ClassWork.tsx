import { useEffect, useState } from "react";
import styles from "@styles/componentStyles/ClassWork.module.scss";

type Props = {
    selectedClassroom: number;
    selectedDayIndex: number;
};

export default function ClassWork(props: Props) {
    const [subjects, setSubjects] = useState<string[]>([]);
    const [periods, setPeriods] = useState<number[]>([]);

    useEffect(() => {
        const fetchClassWork = async () => {
            try {
                const res = await fetch(
                    `https://click.ecc.ac.jp/ecc/webdesign/wdct/api/v1/openrooms/timetables/?classroom=${props.selectedClassroom}&weekday=${props.selectedDayIndex}`
                );
                if (!res.ok) {
                    throw new Error("データの取得に失敗しました");
                }
                const json = await res.json();
                const periods = json.data?.[0]?.week?.[0]?.periods || [];
                console.log("Extracted periods:", periods);

                if (periods.length === 0) {
                    console.warn("Periods data is empty or undefined");
                }
                const fetchedSubjects = periods.map(
                    (period: { subject: string }) => period.subject
                );
                const fetchedPeriods = periods.map((period: { period: number }) => period.period);

                setSubjects(fetchedSubjects);
                setPeriods(fetchedPeriods);
            } catch (error) {
                console.error("エラー:", error);
            }
        };
        fetchClassWork();
    }, [props.selectedClassroom, props.selectedDayIndex]);

    return (
        <div className={styles.subjectsWrap}>
            {subjects.map((subject, index) => (
                <div className={styles.subjects} key={index}>
                    <p>{periods[index]}限</p>
                    <p>{subject}</p>
                </div>
            ))}
        </div>
    );
}
