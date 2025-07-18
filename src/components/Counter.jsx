import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  Stack,
} from '@mui/material';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#f0f2f5"
    >
      <Paper elevation={16} sx={{ padding: 4, borderRadius: 4, textAlign: 'center', width: 300 }}>
        <Typography variant="h4" gutterBottom>
          Counter App
        </Typography>

        <Typography variant="h5" sx={{ marginBottom: 2 }}>
          Count: {count}
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="contained" color="primary" onClick={() => setCount(count - 1)}>
            -
          </Button>
          <Button variant="contained" color="secondary" onClick={() => setCount(count + 1)}>
            +
          </Button>
        </Stack>
        <Button
          variant="outlined"
          color="secondary"
          sx={{ marginTop: 2 }}
          onClick={() => setCount(0)}
        >
          Reset
        </Button>
      </Paper>
    </Box>
  );
};

export default Counter;
