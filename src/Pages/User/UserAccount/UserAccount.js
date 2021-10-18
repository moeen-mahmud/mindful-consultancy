import React from "react";
import useAuth from "../../../hooks/useAuth";
import "./UserAccount.css";

const UserAccount = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div classkName="user-area">
      {user.photoURL && <img src={user.photoURL} alt={user.displayName} />}
      <h1>
        Hello <span className="hl-text">{user.displayName}</span>
      </h1>
      <p>Hope you brought some pizza for us! 🍕</p>
    </div>
  );
};

export default UserAccount;
