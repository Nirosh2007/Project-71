import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAfKIDClEVuxDDUsey1_lSbh_tfltzGQ9I",
    authDomain: "e-ride-project-cb404.firebaseapp.com",
    projectId: "e-ride-project-cb404",
    storageBucket: "e-ride-project-cb404.appspot.com",
    messagingSenderId: "25557132842",
    appId: "1:25557132842:web:6e20c446230562839f0553"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
