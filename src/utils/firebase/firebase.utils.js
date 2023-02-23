import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDU1UiuWJg8v8qy_kgUoeTuP0byLU5Gn-8",
  authDomain: "crwn-clothing-db-8d228.firebaseapp.com",
  projectId: "crwn-clothing-db-8d228",
  storageBucket: "crwn-clothing-db-8d228.appspot.com",
  messagingSenderId: "1081571271823",
  appId: "1:1081571271823:web:82d77121e3cb2c6ac1bcfa",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
 };
