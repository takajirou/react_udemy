const Example = () => {
    // 練習用
    let strOrNumOrBool: string | number | boolean = "Hello";
    strOrNumOrBool = 102;
    strOrNumOrBool = true;
    console.log(strOrNumOrBool);

    let helloOrNumOrBool: "Hello" | number | boolean = "Hello";

    type HelloOrNum = "Hello" | number;
    const hello: HelloOrNum = "Hello";
};

export default Example;
