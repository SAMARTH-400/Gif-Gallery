import '@/styles/globals.css'
import { initFirebase } from '../firebase/firebaseApp'

export default function App({ Component, pageProps }) {
  const app = initFirebase();
  return <Component {...pageProps} />
}
