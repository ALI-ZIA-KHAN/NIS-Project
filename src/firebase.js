// import * as firebase from "firebase/app"
// import "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// import { YoutubeSearchedForSharp } from "@mui/icons-material";

import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDb473QMJC44naKAZ5OS_n4cL5i68RWNZM",
  authDomain: "authentication-nis.firebaseapp.com",
  projectId: "authentication-nis",
  storageBucket: "authentication-nis.appspot.com",
  messagingSenderId: "259421590679",
  appId: "1:259421590679:web:b9e106fcd102f37d57c5d2",
  measurementId: "G-J3XZT8K3GS"
};

// Initialize Firebase
export const app =initializeApp(firebaseConfig);
export const auth = getAuth(app);
// ​​const auth = getAuth(app);
// ​​const db = getFirestore(app);