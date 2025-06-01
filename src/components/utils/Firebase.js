// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBig81sP3JuDuiXlYF1lUuWzXDCpYTfTJs",
  authDomain: "netflixgpt-4cad2.firebaseapp.com",
  projectId: "netflixgpt-4cad2",
  storageBucket: "netflixgpt-4cad2.firebasestorage.app",
  messagingSenderId: "205962737438",
  appId: "1:205962737438:web:bb46b55c15ae3d30b0fb0f",
  measurementId: "G-TDZGRB5QEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();