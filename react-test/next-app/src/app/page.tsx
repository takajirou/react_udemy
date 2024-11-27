"use client";

import style from "@styles/appStyles/page.module.css";
import Select from "@/components/Select";
import DayOfWeek from "@/components/DayOfWeek";
import { useState, useEffect } from "react";

export default function Home() {
    const [classrooms, setClassrooms] = useState<number[]>([]);
    const [selectedClassroom, setSelectedClassroom] = useState<number | null>(null);

    useEffect(() => {
        const fetchClassrooms = async () => {
            try {
                const res = await fetch(
                    "https://click.ecc.ac.jp/ecc/webdesign/wdct/api/v1/openrooms/classrooms/",
                    { cache: "no-store" }
                );
                if (!res.ok) {
                    throw new Error("データの取得に失敗しました");
                }
                const { data } = await res.json();
                setClassrooms(data);
                setSelectedClassroom(data[0]);
            } catch (error) {
                console.error(error);
            }
        };

        fetchClassrooms();
    }, []);

    if (classrooms.length === 0) {
        return <div>データを読み込んでいます...</div>;
    }

    return (
        <div>
            <h1 className={style.title}>空き教室を探す</h1>
            <Select
                options={classrooms}
                onChange={(selectedOption) => setSelectedClassroom(selectedOption)}
            />
            {selectedClassroom !== null && <DayOfWeek selectedClassroom={selectedClassroom} />}
        </div>
    );
}
