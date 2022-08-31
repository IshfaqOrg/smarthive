import * as React from 'react';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

// eslint-disable-next-line import/prefer-default-export
export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    // color: 'black',
    // borderWidth: '1px',
    border: 'none',
  },
  '& .MuiInput-underline:after': {
    borderWidth: '1px',
    border: 'none',

    borderBottomColor: 'black',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none',
      borderWidth: '1px',
      borderColor: 'black',
    },
    '&:hover fieldset': {
      border: 'none',
      borderWidth: '1px',
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderWidth: '1px',
      border: 'none',
      borderColor: 'black',
    },
  },
});
