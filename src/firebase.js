import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDFkuS2OExM0HBOBz4XobwAKz57lpgiA8g",
    authDomain: "clone-e4a13.firebaseapp.com",
    projectId: "clone-e4a13",
    storageBucket: "clone-e4a13.appspot.com",
    messagingSenderId: "32329356357",
    appId: "1:32329356357:web:4b4cddf54694db06dcbf2c",
    measurementId: "G-KHT5Z5367K"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };