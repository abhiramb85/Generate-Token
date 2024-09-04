import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const TokenDisplay = ({ blueTokens, redTokens }) => {
  return (
    <>
      <Box my={4}>
        <Typography variant="h6">Blue Tokens</Typography>
        {blueTokens.map((row, index) => (
          <Grid container spacing={2} key={index}>
            {row.map((token, idx) => (
              <Grid item key={idx}>
                <Typography>{token}</Typography>
              </Grid>
            ))}
          </Grid>
        ))}
      </Box>
      <Box my={4}>
        <Typography variant="h6">Red Tokens</Typography>
        {redTokens.map((row, index) => (
          <Grid container spacing={2} key={index}>
            {row.map((token, idx) => (
              <Grid item key={idx}>
                <Typography>{token}</Typography>
              </Grid>
            ))}
          </Grid>
        ))}
      </Box>
    </>
  );
};

export default TokenDisplay;
