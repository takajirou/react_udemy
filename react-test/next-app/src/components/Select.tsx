import style from "@styles/componentStyles/Select.module.scss";

type Props = {
    options: number[];
};

const Select = ({ options }: Props) => {
    return (
        <select className={style.select}>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Select;
