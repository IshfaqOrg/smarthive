import { React } from 'react';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  buttonText: {
    color: '#e07344',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'none',
  },
});

function ButtonNav({ name }) {
  const classes = useStyles();
  return (
    <Button
      disableRipple
      classes={{ text: classes.buttonText }}
      className="!px-4 !py-2 !font-body"
      sx={{
        border: 'solid 1px #24272d',
        borderRadius: '10px',
        fontColor: 'white',
        backgroundColor: '#283046',
        background: 'linear-gradient(90.66deg, #e0734478 0%, #e0984466 100%)',
      }}
    >
      {/* font color #6a727d,   */}
      {name}
    </Button>
  );
}
export default ButtonNav;
