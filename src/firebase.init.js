// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE3FodXsOqIIJsK35fNLM4caAmlvJqec8",
  authDomain: "email-password-auth-fa892.firebaseapp.com",
  projectId: "email-password-auth-fa892",
  storageBucket: "email-password-auth-fa892.appspot.com",
  messagingSenderId: "339158046941",
  appId: "1:339158046941:web:1ced484ce2ebd229f12334"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app