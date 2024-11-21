const Example = () => {
    // 練習用
    const str: string = "Hello";
    console.log(str);

    const num: number = 102;
    console.log(num);

    const bignum: bigint = 100n;
    console.log(bignum);

    const bool: boolean = true;
    console.log(bool);

    const nul: null = null;
    console.log(nul);

    const und: undefined = undefined;
    console.log(und);

    // リテラル型
    const trueVal: true = true;
    const num123: 123 = 123;
    console.log(trueVal, num123);
};

export default Example;
