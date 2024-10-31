import { useCounter } from "../context/counterContext";

const CounterResult = () => {
    const state = useCounter();
    return <h3>{state}</h3>;
};

export default CounterResult;
