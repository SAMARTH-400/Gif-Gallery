import { useState } from "react";
import { useRouter } from "next/router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Signin() {
    const auth = getAuth();
    const router = useRouter();
    const [user, loading] = useAuthState(auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = ()=>{
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            router.replace('/');
        }).catch(error => console.log(error));
    }
    if(loading){
        return (
            <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                <h2 className="text-center text-white text-xl font-semibold">Verifying....</h2>    
            </div>
        )
    }
    if (user) {
        router.push("/");
        return (
            <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                <h2 className="text-center text-white text-xl font-semibold">Loading User data...</h2>    
            </div>
        )
    }
    return (
        <div className="flex flex-col h-screen w-full bg-gray-300">
            <div className="flex flex-col items-center justify-center my-auto">
                <div className="bg-white shadow rounded w-[30%] p-10">
                    <p className="text-3xl font-semibold leading-6 text-gray-800 mb-20 mt-10"> REGISTER </p>
                    
                    <div>
                        <lable className="text-sm font-medium leading-none text-gray-800">Email</lable>
                        <input type="email" className="bg-gray-200 border rounded focus:outline-none text-base  font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 "  value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mt-6  w-full">
                        <lable className="text-sm font-medium leading-none text-gray-800">Password</lable>
                        <input type="password" className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="my-12">
                        <button className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-md font-semibold leading-none text-white focus:outline-none bg-gray-800 border rounded hover:bg-gray-600 py-4 w-full" onClick={register} > Create my account </button>
                        <button className="text-md mt-4 font-medium leading-none text-gray-500 mb-16 " onClick={()=>router.push('/signin')}> Already have an account? <span className="font-bold text-black"> Sign in here </span> </button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
