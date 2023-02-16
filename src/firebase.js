import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBlS1393h0obRuZwxJG1eE7-hLiIUHlHhg",
  authDomain: "store-ef0e9.firebaseapp.com",
  projectId: "store-ef0e9",
  storageBucket: "store-ef0e9.appspot.com",
  messagingSenderId: "232165497806",
  appId: "1:232165497806:web:c048cd22de05d9ef64699f",
  measurementId: "G-MGMP57L0QV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);