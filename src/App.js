import React, { useState, useEffect } from 'react';
import TokenForm from './components/TokenForm';
import TokenDisplay from './components/TokenDisplay';
import { Container, Box, Typography } from '@mui/material';

function App() {
  const [tokens, setTokens] = useState({ blueTokens: [], redTokens: [] });
  const [isGenerated, setIsGenerated] = useState(false); // Track if tokens have been generated

  useEffect(() => {
    if (tokens.blueTokens.length === 0 && tokens.redTokens.length === 0) {
      setIsGenerated(false);
    } else {
      setIsGenerated(true);
    }
  }, [tokens]);

  const handleGenerate = (blueData, redData) => {
    const blueTokens = generateTokens(blueData.count, blueData.prefix, blueData.perRow, 'blue');
    const redTokens = generateTokens(redData.count, redData.prefix, redData.perRow, 'red');
    setTokens({ blueTokens, redTokens });
    setIsGenerated(true); // Set to true when tokens are generated
  };

  const handleClear = () => {
    setTokens({ blueTokens: [], redTokens: [] });
    setIsGenerated(false); // Set to false when tokens are cleared
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
        {isGenerated && (
          <>
            <TokenDisplay blueTokens={tokens.blueTokens} redTokens={tokens.redTokens} />
          </>
        )}
      </Box>
    </Container>
  );
}

export default App;
