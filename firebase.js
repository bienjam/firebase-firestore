// const firebase = require("firebase/app");
// require("firebase/firestore");

import {initializeApp } from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBZvqAy0lvZSZx0i63Q-PIjBxcf9f3jwqY",
  authDomain: "mamamia-test-ca081.firebaseapp.com",
  projectId: "mamamia-test-ca081",
  storageBucket: "mamamia-test-ca081.appspot.com",
  messagingSenderId: "482534363165",
  appId: "1:482534363165:web:8161c34729e05b8361f6f4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

// const firebaseConfig = {
//   apiKey: "AIzaSyBZvqAy0lvZSZx0i63Q-PIjBxcf9f3jwqY",
//   authDomain: "mamamia-test-ca081.firebaseapp.com",
//   projectId: "mamamia-test-ca081",
//   storageBucket: "mamamia-test-ca081.appspot.com",
//   messagingSenderId: "482534363165",
//   appId: "1:482534363165:web:8161c34729e05b8361f6f4",
//   databaseURL: "http://localhost:8080",
// };

// firebase.initializeApp(firebaseConfig);


// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";


// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://support.google.com/firebase/answer/7015592
// const firebaseConfig = {
//   apiKey: "AIzaSyBZvqAy0lvZSZx0i63Q-PIjBxcf9f3jwqY",
//   authDomain: "mamamia-test-ca081.firebaseapp.com",
//   projectId: "mamamia-test-ca081",
//   storageBucket: "mamamia-test-ca081.appspot.com",
//   messagingSenderId: "482534363165",
//   appId: "1:482534363165:web:8161c34729e05b8361f6f4",
//   databaseURL: "http://localhost:8080",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);


// // Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);