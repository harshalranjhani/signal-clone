import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1Yw7SD386MZRkmbhxCL3TFU6ZHrqu8Po",
  authDomain: "signal-clone-2fdb2.firebaseapp.com",
  projectId: "signal-clone-2fdb2",
  storageBucket: "signal-clone-2fdb2.appspot.com",
  messagingSenderId: "92780376376",
  appId: "1:92780376376:web:591a62341e4a4542b011cd",
};
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
