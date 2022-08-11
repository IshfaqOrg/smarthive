import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function Loader() {
  return (
    <div className="bg-theme-black w-screen h-screen transition ease-in ">
      <CircularProgress
        className="inset-0 justify-items-center items-center"
        size={200}
        thickness={0.5}
        style={{ padding: '5px' }}
      />
    </div>
  );
}

export default Loader;
