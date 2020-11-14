import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMzaU8uoEqHb86nWpIQPQOwn6E6pZr3jM",
  authDomain: "tik-tok-clone-d80ec.firebaseapp.com",
  databaseURL: "https://tik-tok-clone-d80ec.firebaseio.com",
  projectId: "tik-tok-clone-d80ec",
  storageBucket: "tik-tok-clone-d80ec.appspot.com",
  messagingSenderId: "744552425317",
  appId: "1:744552425317:web:3bfb428c027ea26205238c",
  measurementId: "G-TQHT25TQN0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
