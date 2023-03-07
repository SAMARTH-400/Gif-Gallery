import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


import { useRouter } from 'next/router';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { initFirebase } from '../firebase/firebaseApp';

import Gallery from "../components/Gallery"

export default function Home() {
    initFirebase();
    const auth = getAuth();
    const router = useRouter();
    const [user, loading] = useAuthState(auth);
    
    if(loading){
        return (
            <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>    
            </div>
        )
    }
    if (!user) {
        router.push("/signin");
        return <div>Please sign in to continue</div>;
    }
    function logout () {
        console.log("hii");
        signOut(getAuth()).then(() => {
            router.replace('/signin');
        }).catch(error => console.log(error));
    }
    return(
        <div>
            <Gallery />
            <button onClick={logout} className='absolute rounded-full h-20 w-20 right-20 bottom-20 bg-red-500 flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 "><path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" /></svg>
            </button>
        </div>
    )
}
