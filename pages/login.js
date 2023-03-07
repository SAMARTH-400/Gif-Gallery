import { useRouter } from "next/router";
import { useState } from "react"
import {signinWitheEmail, signinWithGoogle} from "../firebase/AuthUtility"


export default function Login() {
const [userCredentials, setUserCredentials] = useState({ email : null, password : null });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserCredentials({ ...userCredentials, [name]: value});
    }       
    return (
        <div className="flex flex-col gap-5">
            <button onClick={signinWithGoogle} > Login wiht google </button>
            <input name="email" type="text" value={userCredentials.email} onChange={handleChange} ></input>
            <input name="password" type="password" value={userCredentials.password} onChange={handleChange} ></input>
            <button onClick={signinWitheEmail(userCredentials.email, userCredentials.password)}> Login with email </button>
        </div>
    )
}
