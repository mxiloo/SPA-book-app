// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBAtLp4_-UZj0oMe80WI93qdAVDhhcVcRw",
    authDomain: "spa-book-catalog-5f1b5.firebaseapp.com",
    projectId: "spa-book-catalog-5f1b5",
    storageBucket: "spa-book-catalog-5f1b5.appspot.com",
    messagingSenderId: "662418297059",
    appId: "1:662418297059:web:4385728500f77d6dd435d6",
    measurementId: "G-SMRWFE4YHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();