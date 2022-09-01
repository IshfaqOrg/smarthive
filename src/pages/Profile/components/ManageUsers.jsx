/* eslint-disable react/jsx-props-no-spreading */
import {
  Box, Tab, Tabs,
} from '@mui/material';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import TabPanel from './TabPanel';
import ButtonNav from './ButtonNav';

const useStyles = makeStyles({
  indicator: {
    width: '0px',
    height: '0px',

  },
  tabSelected: {
    // backgroundColor: '#e07344',
    color: 'white',
    '&.Mui-selected': {
      color: '#e09844',
    },
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
    <Box className="flex flex-col">

      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          classes={{
            indicator: classes.indicator,
          }}

        >
          <div className="flex flex-wrap gap-1">

            <Tab disableRipple label="Current user" {...a11yProps(0)} classes={{ root: classes.tabSelected }} />
            <Tab disableRipple label="Pending user" {...a11yProps(1)} classes={{ root: classes.tabSelected }} />
            <Tab disableRipple label="Invited user" {...a11yProps(1)} classes={{ root: classes.tabSelected }} />
          </div>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <h1>HERE</h1>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1>HERE IS second</h1>
      </TabPanel>
    </Box>
  );
}

export default ManageUsers;
