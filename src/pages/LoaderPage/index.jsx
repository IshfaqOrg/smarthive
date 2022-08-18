import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function Loader() {
  return (
    <div className="flex bg-theme-black w-screen h-screen transition ease-in ">
      <div className="flex h-full w-full justify-center items-center">

        <CircularProgress
          size={150}
          thickness={0.5}
          style={{ padding: '5px' }}
        />

      </div>
    </div>
  );
}

export default Loader;
