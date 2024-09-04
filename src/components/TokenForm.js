import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const TokenForm = ({ onGenerate, onClear }) => {
  const [blueData, setBlueData] = useState({ count: '', prefix: '', perRow: '' });
  const [redData, setRedData] = useState({ count: '', prefix: '', perRow: '' });

  const handleGenerate = () => {
    // Convert values to numbers where needed before passing to onGenerate
    onGenerate(
      {
        count: parseInt(blueData.count) || 0,
        prefix: blueData.prefix,
        perRow: parseInt(blueData.perRow) || 0
      },
      {
        count: parseInt(redData.count) || 0,
        prefix: redData.prefix,
        perRow: parseInt(redData.perRow) || 0
      }
    );
  };

  const handleClear = () => {
    // Reset form fields to empty strings
    setBlueData({ count: '', prefix: '', perRow: '' });
    setRedData({ count: '', prefix: '', perRow: '' });
    onClear();
  };

  return (
    <Box>
      <Box mb={2}>
        <TextField
          label="Blue Token Count"
          type="number"
          value={blueData.count}
          onChange={(e) => setBlueData({ ...blueData, count: e.target.value })}
          sx={{ mr: 2 }}
        />
        <TextField
          label="Blue Token Prefix"
          value={blueData.prefix}
          onChange={(e) => setBlueData({ ...blueData, prefix: e.target.value })}
          sx={{ mr: 2 }}
        />
        <TextField
          label="Blue Tokens Per Row"
          type="number"
          value={blueData.perRow}
          onChange={(e) => setBlueData({ ...blueData, perRow: e.target.value })}
          sx={{ mr: 2 }}
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Red Token Count"
          type="number"
          value={redData.count}
          onChange={(e) => setRedData({ ...redData, count: e.target.value })}
          sx={{ mr: 2 }}
        />
        <TextField
          label="Red Token Prefix"
          value={redData.prefix}
          onChange={(e) => setRedData({ ...redData, prefix: e.target.value })}
          sx={{ mr: 2 }}
        />
        <TextField
          label="Red Tokens Per Row"
          type="number"
          value={redData.perRow}
          onChange={(e) => setRedData({ ...redData, perRow: e.target.value })}
          sx={{ mr: 2 }}
        />
      </Box>
      <Button variant="contained" color="primary" onClick={handleGenerate}>
        Generate Tokens
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleClear} sx={{ ml: 2 }}>
        Clear Tokens
      </Button>
    </Box>
  );
};

export default TokenForm;
