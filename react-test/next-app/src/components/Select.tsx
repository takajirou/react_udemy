import style from "@styles/componentStyles/Select.module.scss";

type Props = {
    options: number[];
    onChange: (selectedOption: number) => void;
};

const Select = ({ options, onChange }: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(Number(event.target.value)); // 親に選択された値を通知
    };
    return (
        <select className={style.select} onChange={handleChange}>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Select;
