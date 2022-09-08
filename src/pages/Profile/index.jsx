/* eslint-disable react/jsx-props-no-spreading */
import {
  Box, styled, Tab, Tabs, Typography,
} from '@mui/material';
import React from 'react';
import TabPanel from './components/TabPanel';
import AccountOverView from './components/AccountOverView';
import ManageUsers from './components/ManageUsers';

function Profile() {
  const MuiStyledTabs = styled(Tabs)(() => ({
    '& .MuiTabs-indicator': {
      background: 'linear-gradient( 90.66deg, #e07344 0%, #e09844 100%) !important',
      padding: 2,
    },
  }));

  const MuiStyledTab = styled(Tab)(() => ({
    '&.MuiTab-root': {
      color: '#d0d2d6',
      fontWeight: 450,
      textTransform: 'none',
    },
    '&.Mui-selected': {
      fontWeight: 600,
      color: '#e07344',
    },
  }));

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
    <div className="h-full  w-3/4 mt-12">
      <Box>
        <Typography align="left" className="!font-body !text-2xl text-[#d0d2d6] !font-bold !mb-6 !text-left">Profile</Typography>
      </Box>
      <div>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: '#505466' }}>
            <MuiStyledTabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <MuiStyledTab disableRipple label="Account overview" {...a11yProps(0)} />
              <MuiStyledTab disableRipple label=" Manage users" {...a11yProps(1)} />
            </MuiStyledTabs>
          </Box>
          <TabPanel value={value} index={0}>
            <AccountOverView />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ManageUsers />
          </TabPanel>
        </Box>
      </div>
    </div>
  );
}

export default Profile;
