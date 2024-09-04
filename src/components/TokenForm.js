import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const TokenForm = ({ onGenerate, onClear }) => {
  const [blueData, setBlueData] = useState({ count: 0, prefix: '', perRow: 1 });
  const [redData, setRedData] = useState({ count: 0, prefix: '', perRow: 1 });

  // Clear form inputs when the clear button is pressed
  useEffect(() => {
    setBlueData({ count: 0, prefix: '', perRow: 1 });
    setRedData({ count: 0, prefix: '', perRow: 1 });
  }, [onClear]);

  const handleChange = (e, color) => {
    const { name, value } = e.target;
    if (color === 'blue') {
      setBlueData({ ...blueData, [name]: value });
    } else {
      setRedData({ ...redData, [name]: value });
    }
  };

  const handleGenerateClick = () => {
    onGenerate(blueData, redData);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Number of Blue Tokens"
          name="count"
          value={blueData.count}
          onChange={(e) => handleChange(e, 'blue')}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Prefix for Blue Tokens"
          name="prefix"
          value={blueData.prefix}
          onChange={(e) => handleChange(e, 'blue')}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Blue Tokens Per Row"
          name="perRow"
          value={blueData.perRow}
          onChange={(e) => handleChange(e, 'blue')}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Number of Red Tokens"
          name="count"
          value={redData.count}
          onChange={(e) => handleChange(e, 'red')}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Prefix for Red Tokens"
          name="prefix"
          value={redData.prefix}
          onChange={(e) => handleChange(e, 'red')}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Red Tokens Per Row"
          name="perRow"
          value={redData.perRow}
          onChange={(e) => handleChange(e, 'red')}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleGenerateClick}>
          Generate
        </Button>
        <Button variant="outlined" color="secondary" onClick={onClear} style={{ marginLeft: '10px' }}>
          Clear
        </Button>
      </Grid>
    </Grid>
  );
};

export default TokenForm;
