import { CircularProgress } from '@mui/material';
import React from 'react';

const spinner = () => (
  <div className="flex h-full w-full mt-8 justify-center items-center">
    <CircularProgress
      size={80}
      thickness={0.7}
      style={{ padding: '7px' }}
    />
  </div>
);

export default spinner;
