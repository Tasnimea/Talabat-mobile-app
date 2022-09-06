// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore'
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCykCWzw7zJj9ss7ggfJ5_Xwj0Yf3nz4B4",
//   authDomain: "react-projeact-two.firebaseapp.com",
//   projectId: "react-projeact-two",
//   storageBucket: "react-projeact-two.appspot.com",
//   messagingSenderId: "594115816132",
//   appId: "1:594115816132:web:2e7a0ffd40ba63c9e6f791"
// };
// // npm install --save react-native-vector-icons
// // Initialize Firebase
// if (!firebase.apps.lenght){
//     firebase.initializeApp(firebaseConfig);
// }
// export {firebase};
// const app = initializeApp(firebaseConfig);
// export default app
// export const auth = getAuth(app) 

// export const db = getFirestore(app);


// Import the functions you need from the SDKs you need

//////////////////////////////////////////////////////////////////////////////////////

import {getFirestore} from "firebase/firestore"

import { initializeApp } from "firebase/app";

import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAm0ZztPHEqCLlgpBrQawo3AYJ8cVy1C-c",
  authDomain: "talabat-8e833.firebaseapp.com",
  projectId: "talabat-8e833",
  storageBucket: "talabat-8e833.appspot.com",
  messagingSenderId: "147254476240",
  appId: "1:147254476240:web:9c552007c798308254cdd5",
  measurementId: "G-1W8ZB7DZ38"
};


let app;
app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth };
export { db };