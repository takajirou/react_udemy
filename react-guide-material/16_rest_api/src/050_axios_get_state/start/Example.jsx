import { useEffect, useState } from "react";
import axios from "axios";

const Example = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get("http://localhost:3003/user");
                setUsers(res.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        getUser();
    }, []);

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <h3>{user.username}</h3>
                    <p>age: {user.age}</p>
                    <p>hobby: {user.hobbies.join(", ")}</p>
                </div>
            ))}
        </div>
    );
};

export default Example;
