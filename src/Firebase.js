import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzn7qKt4ceGWhh1-cciX6N5KL2QT7XkQk",
  authDomain: "linkedin-clone-d38cb.firebaseapp.com",
  projectId: "linkedin-clone-d38cb",
  storageBucket: "linkedin-clone-d38cb.appspot.com",
  messagingSenderId: "351647156032",
  appId: "1:351647156032:web:0ccff5c0a6f93adad21ca5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
