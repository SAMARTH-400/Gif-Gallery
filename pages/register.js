import { useState } from "react"
import { createUser } from "../firebase/AuthUtility"

export default function Register() {
const [userCredentials, setUserCredentials] = useState({ email : null, password : null });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserCredentials({ ...userCredentials, [name]: value});
    }
    return (
        <div className="flex flex-col gap-5">
            <input name="email" type="text" value={userCredentials.email} onChange={handleChange} ></input>
            <input name="password" type="password" value={userCredentials.password} onChange={handleChange} ></input>
            <button onClick={signinWitheEmail(userCredentials.email, userCredentials.password)}> Login with email </button>
        </div>
    )
}
