// import * as firebase from "firebase/app"
// import "firebase/auth"
// import { YoutubeSearchedForSharp } from "@mui/icons-material";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCx_LFPMPVg1eLMN2DsNTZ-LX5ALFvmSnM",
  authDomain: "kfc-pakistan-6dbf3.firebaseapp.com",
  projectId: "kfc-pakistan-6dbf3",
  storageBucket: "kfc-pakistan-6dbf3.appspot.com",
  messagingSenderId: "909633519822",
  appId: "1:909633519822:web:8b74d4e3b338e04287d09f",
  measurementId: "G-7FC260TVWG"
};
// Initialize Firebase
export const app =initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
// ​​const auth = getAuth(app);
// ​​const db = getFirestore(app);