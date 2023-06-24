import React, { useContext, useEffect } from 'react';
import router from 'next/router';
import { Button, TextField, Typography, Box } from '@mui/material';
import { AuthContext } from './authContext';
import Header from '../components/header';

interface LoginProps {
  sx?: {
    display: string;
    flexDirection: string;
    alignItems: string;
    padding: string;
}
}

const Login: React.FC<LoginProps> = () => {
  const { setName, setIsAuthenticated, name, isAuthenticated } = useContext(AuthContext);

  console.log(name, isAuthenticated)

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/posts');
    }
  }, [isAuthenticated]);

  return (
    <div>
      <Header />
      <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}>
        <Typography variant="h4" sx={{ marginBottom: '20px' }}>
          Login
        </Typography>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ marginBottom: '20px' }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            setIsAuthenticated(true);
          }}
          sx={{ width: '120px' }}
        >
          Login
        </Button>
      </Box>
    </div>
  );
};

export default Login;
