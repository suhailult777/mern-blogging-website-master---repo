import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBV5pnya2osEHCSrdyoiMBfFlStZtorivs",
    authDomain: "react-js-blog-website-f84cf.firebaseapp.com",
    projectId: "react-js-blog-website-f84cf",
    storageBucket: "react-js-blog-website-f84cf.appspot.com",
    messagingSenderId: "863368882538",
    appId: "1:863368882538:web:c6dc76245c376dce3a5d13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authwithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)

        .then((result) => {
            user = result.user
        })
        .catch((err) => {
            console.log(err)
        })


    return user;


}
