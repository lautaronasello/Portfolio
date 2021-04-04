import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQdhyDv7t3ih7_yUnN2trwM1DNRZfznfE",
  authDomain: "lautaronasello-portfolio.firebaseapp.com",
  projectId: "lautaronasello-portfolio",
  storageBucket: "lautaronasello-portfolio.appspot.com",
  messagingSenderId: "672315797814",
  appId: "1:672315797814:web:f797f1350a030ccf4b0397",
  measurementId: "G-YCTWTYJNND",
};
// Initialize Firebase
const firebase = firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

export default firebaseConfig;
