// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRfAyLm5bsz126lHTA_f5RMlVVNqEa0k8",
  authDomain: "email-authentication-64302.firebaseapp.com",
  projectId: "email-authentication-64302",
  storageBucket: "email-authentication-64302.appspot.com",
  messagingSenderId: "275999562457",
  appId: "1:275999562457:web:d04e3e5d8812e8cbbebcc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;