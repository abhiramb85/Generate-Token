import React, { useState } from 'react';
import TokenForm from './components/TokenForm';
import TokenDisplay from './components/TokenDisplay';
import { Container, Box } from '@mui/material';

function App() {
  const [tokens, setTokens] = useState({ blueTokens: [], redTokens: [] });

  const handleGenerate = (blueData, redData) => {
    const blueTokens = generateTokens(blueData.count, blueData.prefix, blueData.perRow);
    const redTokens = generateTokens(redData.count, redData.prefix, redData.perRow);
    setTokens({ blueTokens, redTokens });
  };

  const handleClear = () => {
    setTokens({ blueTokens: [], redTokens: [] });
  };

  const generateTokens = (count, prefix, perRow) => {
    let tokens = [];
    for (let i = 1; i <= count; i++) {
      tokens.push(`${prefix}${i}`);
    }
    return chunkArray(tokens, perRow);
  };

  const chunkArray = (array, size) => {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  return (
    <Container>
      <Box my={4}>
        <TokenForm onGenerate={handleGenerate} onClear={handleClear} />
        <TokenDisplay blueTokens={tokens.blueTokens} redTokens={tokens.redTokens} />
      </Box>
    </Container>
  );
}

export default App;
