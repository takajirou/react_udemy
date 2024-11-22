import style from "@styles/appStyles/page.module.css";
import Select from "@/components/Select";
import DayOfWeek from "@/components/DayOfWeek";

export default async function Home() {
    const res = await fetch(
        "https://click.ecc.ac.jp/ecc/webdesign/wdct/api/v1/openrooms/classrooms",
        { cache: "no-store" }
    );
    if (!res.ok) {
        throw new Error("データの取得に失敗しました");
    }
    const { data } = await res.json();

    return (
        <div>
            <h1 className={style.title}>空き教室を探す</h1>
            <Select options={data} />
            <DayOfWeek />
        </div>
    );
}
