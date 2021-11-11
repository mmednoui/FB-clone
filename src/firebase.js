// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCEaIODlry0WVf2KjKhzdgtuIRLYjskPrs",
  authDomain: "fb-clone-a2d23.firebaseapp.com",
  projectId: "fb-clone-a2d23",
  storageBucket: "fb-clone-a2d23.appspot.com",
  messagingSenderId: "40676179055",
  appId: "1:40676179055:web:89447a4801b9e0eb29219a",
  measurementId: "G-07T6YQ3DST",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
