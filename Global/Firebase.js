// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/app'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS3aRb0t7PWauIO59XNCQ1v1QV0VmVLb8",
  authDomain: "bicycle-381720.firebaseapp.com",
  projectId: "bicycle-381720",
  storageBucket: "bicycle-381720.appspot.com",
  messagingSenderId: "665703044404",
  appId: "1:665703044404:web:a38172187fdc78dc3b4161",
  measurementId: "G-NTPF2PE0LK"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
let app
if(!firebase.apps.lenght===0){
    app=firebase.initializeApp(firebaseConfig)
}else{

    app=firebase.app()
}
export const auth=firebase.auth(app);