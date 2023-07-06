import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCjZHaiTczJ1v45mAWdIeW8ca3PvCLmi0",
  authDomain: "undressed-6655c.firebaseapp.com",
  projectId: "undressed-6655c",
  storageBucket: "undressed-6655c.appspot.com",
  messagingSenderId: "407651726486",
  appId: "1:407651726486:web:f05770a17c95f0c2213eb7",
  measurementId: "G-965L2Q312V",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
