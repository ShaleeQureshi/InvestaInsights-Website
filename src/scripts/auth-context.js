import React, { useEffect, useState } from "react";
import { auth } from "./firebase/config";
import { HashLoader } from "react-spinners";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      }
      setPending(false);
    });
  }, []);
  if (pending) {
    return <HashLoader color="#36d7b7" />;
  }
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
