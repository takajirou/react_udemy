import Counter from "./components/Counter";
import { CounterProvider } from "./context/counterContext";
// POINT useContext x useReducer
const Example = () => {
    return (
        <CounterProvider>
            <Counter />
        </CounterProvider>
    );
};

export default Example;
