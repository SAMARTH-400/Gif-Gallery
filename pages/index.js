import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from 'next/router';
import { getAuth } from 'firebase/auth';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const auth = getAuth();
    const router = useRouter()
    const [user, loading] = useAuthState(auth);
    if(!loading && !user) router.replace('/login');
    return (
        <div>
            Welcome to gif gallery
        </div>
  )
}
