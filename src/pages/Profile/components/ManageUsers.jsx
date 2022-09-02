/* eslint-disable react/jsx-props-no-spreading */
import {
  Box, Button, Tab, Tabs,
} from '@mui/material';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import { AiOutlineMail } from 'react-icons/ai';
import TabPanel from './TabPanel';
import TableUsers from './TableUsers';
// import ButtonNav from './ButtonNav';

const useStyles = makeStyles({
  indicator: {
    width: '0px',
    height: '0px',
  },
  '&.MuiTab-wrapped': {
    display: 'flex',
    flexWrap: 'wrap',
  },
  tabSelected: {
    padding: '0px 5px',
    // backgroundColor: '#e07344',
    color: '#6a727d',
    fontFamily: 'Manrope',
    minHeight: '35px',
    fontWeight: '600 !important',
    width: '120px',
    fontSize: '13px !important',
    textTransform: 'none',
    border: 'solid 1px #24272d',
    borderRadius: '10px',
    marginRight: '40px',
    '&.Mui-selected': {
      color: '#e07344',
      backgroundColor: '#283046',
      background: 'linear-gradient(90.66deg, #e0734478 0%, #e0984466 100%)',
    },
  },
  buttonText: {
    color: 'white',
    fontSize: '14px',
    fontWeight: 500,
    textTransform: 'none',
  },
});

function ManageUsers() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box className="flex flex-col mt-5">

      <Box className="w-full flex !flex-row flex-wrap justify-between " sx={{ width: '100%', height: '38px' }}>

        <Tabs
          value={value}
          onChange={handleChange}
          wrapped
          aria-label="basic tabs example"
          classes={{
            indicator: classes.indicator,
            root: classes.root,
          }}
        >
          <Tab disableRipple label="Current user" {...a11yProps(0)} classes={{ root: classes.tabSelected }} />
          <Tab disableRipple label="Pending user" {...a11yProps(1)} classes={{ root: classes.tabSelected }} />
          <Tab disableRipple label="Invited user" {...a11yProps(2)} classes={{ root: classes.tabSelected }} />
        </Tabs>

        <Button
          disableRipple
          classes={{ text: classes.buttonText }}
          className=" !font-body"
          sx={{
            border: 'solid 1px #82868b !important',
            borderRadius: '10px',
            width: '110px',
            height: '100%',
            background: 'linear-gradient(90.66deg, #e07344 0%, #e09844 100%)',
          }}
        >
          <AiOutlineMail style={{ width: '16px', height: '16px' }} />
          Invite user
        </Button>
      </Box>
      <TabPanel value={value} index={0}>
        <TableUsers />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1>HERE IS second</h1>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h1>HERE IS second</h1>
      </TabPanel>

    </Box>
  );
}

export default ManageUsers;
