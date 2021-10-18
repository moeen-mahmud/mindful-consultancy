// Imporing initialization from firebase
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Function for initialize authentication
const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;
