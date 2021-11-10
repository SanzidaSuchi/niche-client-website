import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

function firebaseInitialize() {
  initializeApp(firebaseConfig);
}

export default firebaseInitialize;