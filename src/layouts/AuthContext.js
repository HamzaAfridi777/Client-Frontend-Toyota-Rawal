// AuthContext.js
import React, { createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initialState = {}; // Add initial state if needed
  // You can add any initial state here if needed in the future

  return <AuthContext.Provider value={initialState}>
  {children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
