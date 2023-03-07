import { getApp } from "firebase/app";
import { signInWithPopup, getAuth, signOut, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export async function signinWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider).then((result) => {
        return GoogleAuthProvider.credentialFromResult(result);
    }).catch( error => console.log(error))
}
export async function logout() {
    signOut(getAuth()).then(() => {
        router.replace('/login');
    }).catch( error => console.log(error) );
}
export async function createUser(email, password) {
    createUserWithEmailAndPassword(getAuth(), email, password).then((userCredential) => {
        return userCredential.user;
    }).catch( error => console.log(error));
}
export async function signinWitheEmail(email, password) {
    signInWithEmailAndPassword(getAuth(), email, password).then((userCredential) => {
        return userCredential.user;
    }).catch( error => console.log(error));
}
