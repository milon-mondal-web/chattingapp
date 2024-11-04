// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtaftYBnB8rmXqrYOoNs4fyzSyy5Am9mg",
  authDomain: "chattingapp-35513.firebaseapp.com",
  projectId: "chattingapp-35513",
  storageBucket: "chattingapp-35513.firebasestorage.app",
  messagingSenderId: "696913718758",
  appId: "1:696913718758:web:8573d08d9a431185f0fa27",
  measurementId: "G-PJ51G5E8YY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app