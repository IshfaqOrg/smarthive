import {
  Box, Tab, Tabs, Typography,
} from '@mui/material';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import TabPanel from './components/TabPanel';
import AccountOverView from './components/AccountOverView';

const useStyles = makeStyles({
  indicator: {
    background: 'linear-gradient( 90.66deg, #e07344 0%, #e09844 100%) !important',
    padding: 2,
  },
  tabSelected: {
    // backgroundColor: '#e07344',
    color: 'white',
    '&.Mui-selected': {
      color: '#e09844',
    },
  },
});

function Profile() {
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
    <div className="h-full  w-2/3 ">

      <Box>
        <Typography align="left" className="!font-body !text-2xl text-slate-200 !font-bold mb-3 !text-left">Profile</Typography>
      </Box>
      <div>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: '#b2b2b2' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              classes={{
                indicator: classes.indicator,
              }}
            >
              <Tab disableRipple label="Account overview" {...a11yProps(0)} classes={{ root: classes.tabSelected }} />
              <Tab disableRipple label=" Manage users" {...a11yProps(1)} classes={{ root: classes.tabSelected }} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <AccountOverView />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Manage users
          </TabPanel>
        </Box>
      </div>
    </div>

  );
}

export default Profile;
