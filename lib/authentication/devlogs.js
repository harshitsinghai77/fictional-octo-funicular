// contexts/auth.js

import React, { createContext, useState, useContext, useEffect } from "react";
import bcryptjs from "bcryptjs";
import { removeExpiredItemFromLocalStorage } from "../../utils/localstorage-helper";

const AuthContext = createContext({});

const LOCALSTORAGE_KEY = "devlog_password";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadPasswordFromLocalStorage() {
      const localStoragePassword = localStorage.getItem(LOCALSTORAGE_KEY);

      if (localStoragePassword) {
        // Check if password matches
        const isPasswordCorrect = await checkPassword(localStoragePassword);
        if (isPasswordCorrect) setUser(true);
      }
    }

    removeExpiredItemFromLocalStorage();
    loadPasswordFromLocalStorage();
  }, []);

  const checkPassword = async (password) => {
    return await bcryptjs.compareSync(
      password,
      "$2a$10$uHvK54z8N.1FiixZP597d.GAh/VwhVsKjbicUZuQFXKNTZSqqYEaC"
    );
  };

  const login = async (password) => {
    const isPasswordCorrect = await checkPassword(password);
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
