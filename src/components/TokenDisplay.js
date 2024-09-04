import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

const TokenDisplay = ({ blueTokens, redTokens }) => {
  // Styles for blue and red tokens
  const tokenStyle = {
    display: 'inline-block',
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
    fontWeight: 'bold',
    color: '#fff'
  };

  return (
    <>
      {/* Blue Tokens Section */}
      <Box my={4}>
        <Typography variant="h6">Blue Tokens</Typography>
        {blueTokens.map((row, rowIndex) => (
          <Grid container spacing={2} key={rowIndex}>
            {row.map((token, tokenIndex) => (
              <Grid item key={tokenIndex}>
                <Box
                  sx={{
                    ...tokenStyle,
                    backgroundColor: 'blue'
                  }}
                >
                  {token}
                </Box>
              </Grid>
            ))}
          </Grid>
        ))}
      </Box>

      {/* Red Tokens Section */}
      <Box my={4}>
        <Typography variant="h6">Red Tokens</Typography>
        {redTokens.map((row, rowIndex) => (
          <Grid container spacing={2} key={rowIndex}>
            {row.map((token, tokenIndex) => (
              <Grid item key={tokenIndex}>
                <Box
                  sx={{
                    ...tokenStyle,
                    backgroundColor: 'red'
                  }}
                >
                  {token}
                </Box>
              </Grid>
            ))}
          </Grid>
        ))}
      </Box>
    </>
  );
};

export default TokenDisplay;
