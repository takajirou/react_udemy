const Example = () => {
    // 練習用
    const repeatStr = (value: string, times: number): string[] => {
        return new Array(times).fill(value);
    };

    const repeatNum = (value: number, times: number): number[] => {
        return new Array(times).fill(value);
    };

    const repeat = <T>(value: T, times: number): T[] => {
        return new Array(times).fill(value);
    };

    const numArry = repeat<number>(3, 5);
    // const strArry = repeatStr("Hello", 3);
    // const numArry = repeatNum(3, 5);
    // console.log(strArry);
    // console.log(numArry);
};

export default Example;
