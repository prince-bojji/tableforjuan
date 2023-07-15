// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqa3OodYrii25Ra4tpX9tYxCBxjgzfN6U",
  authDomain: "tableforjuan-87af7.firebaseapp.com",
  projectId: "tableforjuan-87af7",
  storageBucket: "tableforjuan-87af7.appspot.com",
  messagingSenderId: "895879137429",
  appId: "1:895879137429:web:986c0f3bc07bd57e97b39c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);