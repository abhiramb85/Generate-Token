import React, { useState } from 'react';
import TokenForm from './components/TokenForm';
import TokenDisplay from './components/TokenDisplay';
import { Container, Box } from '@mui/material';

function App() {
  const [tokens, setTokens] = useState({ blueTokens: [], redTokens: [] });

  const handleGenerate = (blueData, redData) => {
    const blueTokens = generateTokens(blueData.count, blueData.prefix, blueData.perRow, 'blue');
    const redTokens = generateTokens(redData.count, redData.prefix, redData.perRow, 'red');
    setTokens({ blueTokens, redTokens });
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
        <TokenForm onGenerate={handleGenerate} onClear={handleClear} />
        <TokenDisplay blueTokens={tokens.blueTokens} redTokens={tokens.redTokens} />
      </Box>
    </Container>
  );
}

export default App;
