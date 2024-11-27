import styles from "@styles/componentStyles/Select.module.scss";

type Props = {
    options: number[];
    onChange: (selectedOption: number) => void;
};

const Select = ({ options, onChange }: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(Number(event.target.value));
    };
    return (
        <select className={styles.select} onChange={handleChange}>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default Select;
