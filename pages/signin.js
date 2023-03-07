import { useState } from "react";
import { useRouter } from "next/router";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Signin() {

    const provider = new GoogleAuthProvider();
    const router = useRouter();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailLogin = ()=>{
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            router.replace('/');
        }).catch(error => console.log(error) );
    }
    const googleLogin = ()=>{
        signInWithPopup(auth, provider).then((result) => {
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
    if(user) {
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
                    <p className="text-3xl font-bold leading-6 text-gray-800 mb-20"> Login </p>

                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mb-10" onClick={googleLogin}>
                        <svg width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z" fill="#4285F4" />
                            <path d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z" fill="#34A853" />
                            <path d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z" fill="#FBBC05" />
                            <path d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z" fill="#EB4335" />
                        </svg>
                        <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                    </button>

                    
                    <div className="w-full flex items-center justify-between py-5"> <hr className="w-full bg-gray-400" /> <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p> <hr className="w-full bg-gray-400  " /> </div>

                    <div>
                        <lable className="text-sm font-medium leading-none text-gray-800">Email</lable>
                        <input type="email" className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"  value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mt-6  w-full">
                        <lable className="text-sm font-medium leading-none text-gray-800">Password</lable>
                        <input type="password" className="bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="my-8">
                        <button role="button" className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-md font-semibold leading-none text-white focus:outline-none bg-gray-800 border rounded hover:bg-gray-600 py-4 w-full" onClick={emailLogin} > Login </button>
                        <button className="text-md mt-4 font-medium leading-none text-gray-500" onClick={()=>router.push('/signup')}> Dont have account? <span className="font-bold text-black"> Sign up here </span> </button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
