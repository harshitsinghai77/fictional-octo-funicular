// contexts/auth.js

import React, { createContext, useState, useContext, useEffect } from "react";
import bcryptjs from "bcryptjs";
import { removeExpiredItemFromLocalStorage } from "../../utils/localstorage-helper";

const AuthContext = createContext({});

const LOCALSTORAGE_KEY = "devlog_password";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    function loadPasswordFromLocalStorage() {
      const localStoragePassword = localStorage.getItem(LOCALSTORAGE_KEY);

      if (localStoragePassword) {
        // Check if password matches
        const isPasswordCorrect = checkPassword(localStoragePassword);
        if (isPasswordCorrect) setUser(true);
      }
    }

    removeExpiredItemFromLocalStorage();
    loadPasswordFromLocalStorage();
  }, []);

  const checkPassword = (password) => {
    return bcryptjs.compareSync(
      password,
      "$2a$10$uHvK54z8N.1FiixZP597d.GAh/VwhVsKjbicUZuQFXKNTZSqqYEaC"
    );
  };

  const login = (password) => {
    const isPasswordCorrect = checkPassword(password);
    if (isPasswordCorrect) {
      localStorage.setItem(LOCALSTORAGE_KEY, password);
      setUser(true);
    }
  };

  const logout = () => {
    localStorage.removeItem(setLoading(false));
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
