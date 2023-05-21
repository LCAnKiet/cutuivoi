

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyAD_StlkCIJhkWlDpt2DXU7RuLb40EXrrE",
  authDomain: "thuexe-4b54a.firebaseapp.com",
  projectId: "thuexe-4b54a",
  storageBucket: "thuexe-4b54a.appspot.com",
  messagingSenderId: "191856448054",
  appId: "1:191856448054:web:e944e067a6342759e17e97",
  measurementId: "G-18W5047JF2"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);