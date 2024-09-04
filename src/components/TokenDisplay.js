import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const TokenDisplay = ({ blueTokens, redTokens }) => {
  const tokenStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
    fontWeight: 'bold',
    color: '#fff',
    width: '50px',
    height: '50px',
    textAlign: 'center',
  };

  const renderRows = (tokens) => {
    return tokens.map((row, rowIndex) => (
      <Grid container item key={rowIndex} spacing={1} justifyContent="flex-start">
        {row.map((token, tokenIndex) => (
          <Grid item key={tokenIndex} xs="auto">
            <Box
              sx={{
                ...tokenStyle,
                backgroundColor: token.color,
              }}
            >
              {token.value}
            </Box>
          </Grid>
        ))}
      </Grid>
    ));
  };

  return (
    <>
      <Box my={4}>
        <Typography variant="h6" gutterBottom>Blue Tokens</Typography>
        <Grid container spacing={2}>
          {renderRows(blueTokens)}
        </Grid>
      </Box>

      <Box my={4}>
        <Typography variant="h6" gutterBottom>Red Tokens</Typography>
        <Grid container spacing={2}>
          {renderRows(redTokens)}
        </Grid>
      </Box>
    </>
  );
};

export default TokenDisplay;
