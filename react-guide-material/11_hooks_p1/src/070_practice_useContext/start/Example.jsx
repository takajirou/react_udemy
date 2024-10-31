import { useReducer } from "react";
import Input from "./components/input";
import Select from "./components/select";
import Result from "./components/Result";
import { CalcProvider } from "./context/CalcContext";

const Example = () => {
    return (
        /* 完成系のJSX */
        // <CalcProvider>
        //<Input name="a" />
        //   <Input name="b" />
        //   <Select />
        //   <Result />
        // </CalcProvider>
        <CalcProvider>
            <Input name="a" />
            <Input name="b" />
            <Select />
            <Result />
        </CalcProvider>
    );
};

export default Example;
