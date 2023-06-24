import router from 'next/router';
import React, { createContext, useState } from 'react';

type AuthContextProps = {
  isAuthenticated: boolean;
  name: string;
  setIsAuthenticated: any,
  setName: any
};

export const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  name: '',
  setIsAuthenticated: () => {},
  setName: () => {}
});

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [name, setName] = useState('');

  // const login = () => {
  //   console.log('login')
  //   console.log(name)
  //   console.log(isAuthenticated, name)
  //   router.push('/posts');
  // };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, setName, name }}>
      {children}
    </AuthContext.Provider>
  );
};
