//Importing necessary files
import React from "react";
import useAuth from "../../../hooks/useAuth";
import "./UserAccount.css";

// Main UserAccount Component
const UserAccount = () => {
  //Getting the user from userAuth hook
  const { user } = useAuth();
  return (
    <div className="user-area">
      {user.photoURL ? (
        <img src={user.photoURL} alt={user.displayName} />
      ) : (
        <span className="user-avatar">{user.displayName.slice(0, 1)}</span>
      )}
      <h1>
        Hello <span className="hl-text">{user.displayName}</span>
      </h1>
      <p>Hope you brought some pizza for us! 🍕</p>
    </div>
  );
};

export default UserAccount;
