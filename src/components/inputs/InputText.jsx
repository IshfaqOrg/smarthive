import { makeStyles } from '@material-ui/core';
import { Box, InputBase, Paper } from '@mui/material';
import React from 'react';

const useStyles = makeStyles({
  textFieldRoot: {
    '&.Mui-selected': {
      borderColor: 'orange',
    },
  },
  input: {
    color: '#b4b7bd !important',
  },
});

function InputText({
  values, handleChange, disabled, handleBlur, icon, name, placeholder,
}) {
  const classes = useStyles();
  return (
    <Paper
      className="w-full !rounded-md border-2 !textInput !rounded-l-2xl"
      classes={{
        root: classes.textFieldRoot,
      }}
      sx={{
        border: 1,
        display: 'flex',
        alignItems: 'center',
        height: '44px',
        borderColor: '#656669',
        backgroundColor: '#283046',
        '&:active': {
          borderColor: 'orange',
        },
        '&:disable': {
          backgroundColor: '#283046',
        },
      }}
    >
      <Box
        className="rounded-l-2xl"
        sx={{
          height: '100%',
          backgroundColor: '#272b30',
          p: '12px',
        }}
      >
        {/* sx={{ color: 'white' }} */}
        <img src={icon} alt={placeholder} style={{ alignSelf: 'center' }} />

      </Box>
      <InputBase
        name={name}
        className="bg-[#283046] w-full rounded-lg "
        sx={{ height: '100%', input: { fontSize: '14px', color: 'white' } }}
        value={values}
        disabled={disabled}
        onChange={handleChange}
        classes={{ disabled: classes.input }}
        onBlur={handleBlur}
        placeholder={placeholder}
      />

    </Paper>
  );
}

export default InputText;
