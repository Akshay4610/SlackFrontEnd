// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBSeeD4eNzd2z4bTKnns9TdQrrgWfLggzo",
    authDomain: "slack-frontend.firebaseapp.com",
    projectId: "slack-frontend",
    storageBucket: "slack-frontend.appspot.com",
    messagingSenderId: "710228334797",
    appId: "1:710228334797:web:a93742247bad668d3e7184",
    measurementId: "G-0EJFMT8F4E"
  };

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;

