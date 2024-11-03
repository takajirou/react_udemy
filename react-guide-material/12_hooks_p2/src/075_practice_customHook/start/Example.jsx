import { useCount } from "./useCount";

const Example = () => {
    const { count, countUp } = useCount(0);
    return (
        <>
            <div>Counts: {count}</div>
            <button onClick={countUp}>Count Up!</button>
        </>
    );
};

export default Example;
