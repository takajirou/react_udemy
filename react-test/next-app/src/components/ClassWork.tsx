import { useEffect } from "react";
import { useState } from "react";

type Props = {
    selectedClassroom: number;
    selectedDayIndex: number;
};

export default function ClassWork(props: Props) {
    const [subjects, setSubjects] = useState<string[]>([]);

    useEffect(() => {
        const fetchClassWork = async () => {
            try {
                const res = await fetch(
                    `https://click.ecc.ac.jp/ecc/webdesign/wdct/api/v1/openrooms/timetables/?classroom=${props.selectedClassroom}&weekday=${props.selectedDayIndex}`,
                    { cache: "no-store" }
                );
                if (!res.ok) {
                    throw new Error("データの取得に失敗しました");
                }
                const json = await res.json();
                const periods = json.data[0].week[0].periods;
                const fetchedSubjects = periods.map(
                    (period: { subject: string }) => period.subject
                );
                setSubjects(fetchedSubjects);
            } catch (error) {
                console.error("エラー:", error);
            }
        };
        fetchClassWork();
    }, [props.selectedClassroom, props.selectedDayIndex]);

    return (
        <div>
            {subjects.map((subject, index) => (
                <p key={index}>{subject}</p>
            ))}
        </div>
    );
}
