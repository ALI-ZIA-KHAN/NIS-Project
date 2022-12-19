// import * as firebase from "firebase/app"
// import "firebase/auth"
// import { YoutubeSearchedForSharp } from "@mui/icons-material";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnoZlTiRf0ADWkHV5FNEYg74hsBh5Yuvo",
  authDomain: "kfc-pakistan-c9bae.firebaseapp.com",
  projectId: "kfc-pakistan-c9bae",
  storageBucket: "kfc-pakistan-c9bae.appspot.com",
  messagingSenderId: "485407285611",
  appId: "1:485407285611:web:f32b44f5ad7e7f226b6c2e",
  measurementId: "G-DX11F4X742"
};
// Initialize Firebase
export const app =initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
// ​​const auth = getAuth(app);
// ​​const db = getFirestore(app);