// Importing necessary components from firebase auth
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

// Importing necessary hooks
import { useEffect, useState } from "react";

// Importing firebase authentication config
import initializeAuthentication from "../Pages/User/Firebase/firebase.init";

initializeAuthentication();

// The useFirebase hook
const useFirebase = () => {
  //States for handling authentication
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //Get auth from provider
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //Function for sign in with google
  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //Function for creating new user
  const createUser = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        //Updating user profile with given data
        updateUserProfile(name);
        setUser(result.user);
        setError(null);
      })
      .catch((error) => {
        setError(error.message.slice(22, -2));
        console.log(error.message);
      }) //Prevent redirect to login after reload
      .finally(setIsLoading(false));
  };

  //Funtion for processing login
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result.user);
        setError(null);
      })
      .catch((error) => {
        setError(error.message.slice(22, -2));
        console.log(error.message);
      })
      .finally(setIsLoading(false));
  };

  //Function for updating user name
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

  //Effect hook for holding the user state
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

  //Function for log out a user
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
    error,
    isLoading,
    signInUsingGoogle,
    createUser,
    processLogin,
    logOut,
  };
};

export default useFirebase;
