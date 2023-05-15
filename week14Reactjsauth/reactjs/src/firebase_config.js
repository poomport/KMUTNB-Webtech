// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCenI-MQus9zkBLolZb4MfalL7Ac-LguHY",
    authDomain: "ratchapoom-ced.firebaseapp.com",
    projectId: "ratchapoom-ced",
    //storageBucket: "ratchapoom-ced.appspot.com",
    //messagingSenderId: "316598133495",
    appId: "1:316598133495:web:c5dc064c0c726adf2229f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;