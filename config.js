import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCRJkYG9uQlQ__yjv71hRFktL8fjzQp0vM",
  authDomain: "test-c58a9.firebaseapp.com",
  projectId: "test-c58a9",
  storageBucket: "test-c58a9.appspot.com",
  messagingSenderId: "565346549804",
  appId: "1:565346549804:web:367c751876c89e91615189",
  measurementId: "G-Z95SKZY3L6"
};

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export {firebase};