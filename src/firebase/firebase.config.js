// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwnxH_-4Qfv5dEnUuqWnrHFeh8vKY7CPo",
  authDomain: "second-simple-firebase-project.firebaseapp.com",
  projectId: "second-simple-firebase-project",
  storageBucket: "second-simple-firebase-project.appspot.com",
  messagingSenderId: "199766463810",
  appId: "1:199766463810:web:57465ec10d062f443864db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default app;