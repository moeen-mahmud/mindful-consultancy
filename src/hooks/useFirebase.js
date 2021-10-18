import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/User/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
    // .then((result) => {
    //   setUser(result.user);
    //   console.log(result.user);
    // })
    // .catch((error) => {
    //   console.log(error.message);
    //   setError(error.message);
    // })
    // .finally(setIsLoading(false));
  };

  const createUser = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        updateUserProfile(name);
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(setIsLoading(false));
  };

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(setIsLoading(false));
  };

  const updateUserProfile = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return unsubscribed;
  }, [auth]);

  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      })
      .finally(setIsLoading(false));
  };

  return {
    user,
    isLoading,
    signInUsingGoogle,
    createUser,
    processLogin,
    logOut,
  };
};

export default useFirebase;
