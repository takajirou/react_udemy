import { useEffect } from "react";

type Props = {
    selectedClassroom: number;
    selectedDayIndex: number;
};

export default function ClassWork(props: Props) {
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
                const data = await res.json();
                console.log("取得したデータ:", data);
            } catch (error) {
                console.error("エラー:", error);
            }
        };
        fetchClassWork();
    }, [props.selectedClassroom, props.selectedDayIndex]);

    return (
        <div>
            教室{props.selectedClassroom}
            <br />
            曜日{props.selectedDayIndex}
        </div>
    );
}
