// src/context/AuthContext.js

import React, { createContext, useContext, useState } from 'react';
import { loginUser as fetchUserData, registerUser as registerNewUser, updateUser as updateUserData } from '../api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const userData = await fetchUserData(email, password);
      setUser(userData);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const registerUser = async (name, cpf, email, password) => {
    try {
      const newUser = await registerNewUser(name, cpf, email, password);
      setUser(newUser);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const updateUser = async ({ name, cpf, email, password }) => {
    try {
      const updatedUser = await updateUserData(user.id, { name, cpf, email, password });
      setUser(updatedUser);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const logout = async () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, registerUser, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
