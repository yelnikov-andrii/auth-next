import React, { useContext } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { AuthContext } from './authContext';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const { isAuthenticated, name, setIsAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    setIsAuthenticated(false)
    router.push('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <nav>
          <ul>
            <li>
              <Link href="/" legacyBehavior>
                <Button component="a" color="inherit">
                  Home
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/login" legacyBehavior>
                <Button component="a" color="inherit">
                  {isAuthenticated ? `Welcome, ${name}!` : 'Login'}
                </Button>
              </Link>
            </li>
            {isAuthenticated && (
              <li>
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              </li>
            )}
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
