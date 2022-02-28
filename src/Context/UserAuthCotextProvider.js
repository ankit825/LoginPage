import { createContext, useContext, useEffect, useState } from "react";
import { db, auth } from "../firebase/FirebaseInit";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

import { Navigate, useNavigate } from "react-router-dom";

export const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  const [AuthError, setAuthError] = useState("");
  const [loading, setLoading] = useState(true);
  const [OAuthError, setOAuthError] = useState(null);

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  const signUp = (email, username, fullName, password, redirect) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // Setting the user in firestore
        db.collection("users").add({
          uid: result.user.uid,
          username,
          fullName,
          photoURL: result.user.photoURL,
        });

        // Setting user to state from users collection
        db.collection("users")
          .where("uid", "==", result.user.uid)
          .get()
          .then((snapshot) => {
            setUser(snapshot.docs.map((doc) => ({ ...doc.data() }))[0]);

            redirect();
          });
      })
      .catch((err) => {
        setAuthError(err.message);
      });
  };
  function facebookSignIn() {
    const facebookAuthProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookAuthProvider);
  }

  function ResetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  return (
    <userAuthContext.Provider
      value={{
        user,
        setUser,
        logIn,
        signUp,
        logOut,
        facebookSignIn,
        ResetPassword,
        loginWithGoogle,
        loading,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export { sendPasswordResetEmail };
