import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDomONQ9GgwANQ4n9KZt3vPftadtA7mTeI",
    authDomain: "gif-gallery-2c000.firebaseapp.com",
    projectId: "gif-gallery-2c000",
    storageBucket: "gif-gallery-2c000.appspot.com",
    messagingSenderId: "247946929084",
    appId: "1:247946929084:web:1dae04ed2bd0f8f88e01b9"
};
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
}