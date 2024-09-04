import React, { useState } from 'react';
import TokenForm from './components/TokenForm';
import TokenDisplay from './components/TokenDisplay';
import { Container, Box, Typography } from '@mui/material';

function App() {
  const [tokens, setTokens] = useState({ blueTokens: [], redTokens: [] });

  const handleGenerate = (blueData, redData) => {
    // Check if inputs are valid
    if (blueData.count > 0 || redData.count > 0) {
      const blueTokens = blueData.count > 0 ? generateTokens(blueData.count, blueData.prefix, blueData.perRow, 'blue') : [];
      const redTokens = redData.count > 0 ? generateTokens(redData.count, redData.prefix, redData.perRow, 'red') : [];
      setTokens({ blueTokens, redTokens });
    }
  };

  const handleClear = () => {
    setTokens({ blueTokens: [], redTokens: [] });
  };

  const generateTokens = (count, prefix, perRow, color) => {
    let tokens = [];
    for (let i = 1; i <= count; i++) {
      tokens.push({ value: `${prefix}${i}`, color });
    }
    return chunkArray(tokens, perRow);
  };

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom align="center">
          Token Generator Application
        </Typography>
        <TokenForm onGenerate={handleGenerate} onClear={handleClear} />
        {tokens.blueTokens.length > 0 && (
          <Box my={4}>
            <Typography variant="h6" gutterBottom>Blue Tokens</Typography>
            <TokenDisplay blueTokens={tokens.blueTokens} redTokens={[]} />
          </Box>
        )}
        {tokens.redTokens.length > 0 && (
          <Box my={4}>
            <Typography variant="h6" gutterBottom>Red Tokens</Typography>
            <TokenDisplay blueTokens={[]} redTokens={tokens.redTokens} />
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default App;
