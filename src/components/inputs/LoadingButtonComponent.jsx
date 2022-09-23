import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material';
import React from 'react';

const LoadingButtonComp = styled(LoadingButton)(() => ({
  borderRadius: '9px',
  root: {
    width: '100%', marginTop: '1rem',
  },
  '&.Mui-disabled': {
    color: '#94a3b8  !important',
    background: 'rgb(163,94,51) !important',
  },
  ' &:hover ': {
    boxShadow: '0 3px 9px rgb(56 57 58), 0 3px 6px rgb(56 57 58)',
  },
  '&.MuiLoadingButton-text': {
    color: 'white',
    fontSize: '.75rem',
  },
}));

// eslint-disable-next-line react/prop-types
function LoadingButtonComponent({ text, loading, disabled }) {
  return (
    <LoadingButtonComp
      type="submit"
      variant="contained"
      className="btn !p-2 !h-12 !text-xs w-full "
      loading={loading}
      disabled={disabled}
    >
      {loading ? '' : text}
    </LoadingButtonComp>
  );
}

export default LoadingButtonComponent;
