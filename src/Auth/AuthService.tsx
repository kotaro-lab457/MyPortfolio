import React, { useState, useEffect } from "react";
import firebase from "../config/Firebase";

interface userContext {
  user: any;
  displayName: string;
  uid: string;
  email: string;
  password: string;
  updateProfile: any;
  updateEmail: any;
  updatePassword: any;
}

const AuthContext = React.createContext<userContext>({
  user: "",
  displayName: "",
  uid: "",
  email: "",
  password: "",
  updateProfile: "",
  updateEmail: "",
  updatePassword: "",
});

const AuthService: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  return (
    <>
      <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
    </>
  );
};

export { AuthContext, AuthService };