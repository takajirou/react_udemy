import { useEffect } from "react";
import axios from "axios";

const Example = () => {
    useEffect(() => {
        // axios.get("http://localhost:3003/user").then((res) => {
        //     console.log(res.data);
        // });
        const getUser = async () => {
            const res = await axios.get("http://localhost:3003/user");
            console.log(res.data);
        };
    }, []);
};

export default Example;
