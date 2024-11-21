const Example = () => {
    // 練習用
    const array1: number[] = [1, 2, 3];
    const array2: Array<number> = [1, 2, 3];
    const array3: (number | string)[] = [1, 2, 3, "4"];
    const array4: Array<number | string> = [1, 2, 3, "4"];

    type Person = { name: string; age?: number };
    const obj1: Person = { name: "Taro", age: 30 };

    const users: Person[] = [{ name: "Taro", age: 30 }, { name: "Hanako" }];
};

export default Example;
