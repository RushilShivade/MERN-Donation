//Sign-In

import React, { useEffect, useState } from 'react';
import { auth, provider } from './config';
import { signInWithPopup } from 'firebase/auth';
import { Container, Button, Typography, AppBar, Toolbar, Grid, Paper } from '@mui/material';
import Home from '../../HomePage';

function SignIn() {
  const [value, setValue] = useState('');

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem('email', data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 4 }}>
              <Typography variant="h4" component="h1" sx={{ mb: 4 }}>
                Welcome to the Sign In Page
              </Typography>
              {!value ? (
                <Button variant="contained" onClick={handleClick}>
                  Sign in with Google
                </Button>
              ) : (
                <Home />
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="body2" color="textSecondary">
              Other content or sections can be added here
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ textAlign: 'center' }}>
            <Typography variant="body2" color="textSecondary">
              Additional information or links can be placed at the bottom
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default SignIn;