const Example = () => {
    // 練習用
    function sum1(x: number, y: number) {
        return x + y;
    }

    const result1 = sum1(1, 2);
    console.log(result1);

    const sum2 = (x: number, y: number): number => x + y;
    const result2 = sum2(10, 20);
};

export default Example;
