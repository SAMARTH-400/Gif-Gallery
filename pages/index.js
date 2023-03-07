import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/router';
import { getAuth } from 'firebase/auth';

import { logout } from "../firebase/AuthUtility"
import Gallery from "../components/Gallery"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const auth = getAuth();
    const router = useRouter()
    const [user, loading] = useAuthState(auth);
    if(!loading && !user) router.replace('/login');
    
    return(
        <div>
        { !user?(
                <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                    <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>    
                </div>
            ):(<Gallery />)
        }
        </div>
    )
}
