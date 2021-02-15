import React from "react";
import { Link } from "react-router-dom";

import firebase from "../config/Firebase";

const Header: React.FC = () => {
  const handleGuestLogin = () => {
    firebase
      .auth()
      .signInAnonymously()
      .then(({ user }) => {
        user?.updateProfile({
          displayName: "ゲストユーザー",
        });
      });
  };

  const handleSignOut = () => {
    firebase.auth().signOut();
  };
  return (
    <header>
      <p>My Portfolio</p>
      <Link to="/">Room</Link>
      <Link to="/books">検索</Link>
      <Link to="/make">作成</Link>
      <button onClick={handleSignOut}>Log out</button>
      <button onClick={handleGuestLogin}>ゲストログイン</button>
    </header>
  );
};

export default Header;
