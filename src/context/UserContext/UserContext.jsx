import { createContext, useContext, useState } from 'react';
import { getUser, signInUser, signupUser } from '../../services/users';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser || { email: null });

  const login = async (email, password) => {
    const authUser = await signInUser(email, password);
    if (authUser) {
      setUser(authUser);
    }
  };
  const signUp = async (email, password) => {
    const registerUser = await signupUser(email, password);
    if (registerUser) {
      setUser(registerUser);
    }
  };

  return (
    <UserContext.Provider value={{ user, login, signUp }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within UserProvider');
  }
  return context;
};
