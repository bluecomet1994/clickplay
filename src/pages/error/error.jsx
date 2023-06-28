import React from 'react';
import { Typography, Container } from '@mui/material';

const ErrorPage = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', pt: 8 }}>
      <Typography variant="h1" gutterBottom>
        Sorry!
      </Typography>
      <Typography variant="body1" style={{ fontFamily: "Segoe UI !important"}} gutterBottom>
        This game is not compatible on mobile devices.
      </Typography>
    </Container>
  );
};

export default ErrorPage;
