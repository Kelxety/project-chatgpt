import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2OQFFl5ciMuJz_v7a0l8Ei6jmOEp98S8",
  authDomain: "chat-gpt-clone-9b9d3.firebaseapp.com",
  projectId: "chat-gpt-clone-9b9d3",
  storageBucket: "chat-gpt-clone-9b9d3.appspot.com",
  messagingSenderId: "849383583561",
  appId: "1:849383583561:web:425599aa2a90a5018d3498",
  measurementId: "G-1E2240DPT0"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }