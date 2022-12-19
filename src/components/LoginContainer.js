import { useState } from "react";
import UserProvider from "../providers/UserProvider";

function LoginContainer() {

    const [value, setValue] = useState({
        username: "",
        password: ""
    });
    const [message, setMessage] = useState("");

    const handleChange = event => {
        const target = event.target;
        const name = target.name;

        setValue({
            ...value,
            [name]: target.value
        })
    }

    const handleSubmit = async () => {
        UserProvider.login(value);
    }

    return (
    <div>
        <h1 className="page-title">Log In</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">
                Username
                <input id="username" name="username" type="text" value={value.username} onChange={handleChange} />
            </label>
            
            <br/><br/>
            <label>
                Password
                <input id="password" name="password" type="password" value={value.password} onChange={handleChange} />
            </label>
            

            <br/><br/>
            <button className="button-primary" type="button" onClick={handleSubmit}>Log In</button>

            <div>{message}</div>

        </form>
    </div>
    )

}


export default LoginContainer;