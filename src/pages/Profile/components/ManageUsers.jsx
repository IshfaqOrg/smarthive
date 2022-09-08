/* eslint-disable react/jsx-props-no-spreading */
import {
  Box, Button, styled, Tab, Tabs,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import TabPanel from './TabPanel';
import TableUsers from './TableUsers';
import { getUsers } from '../../../redux/slices/userSlice';
import TableInvite from './TableInvite';
import TablePendingUsers from './TablePendingUsers';
import InviteModal from './InviteModal';

const MuiStyledTabs = styled(Tabs)(() => ({
  '& .MuiTabs-indicator': {
    display: 'none',
  },
  '& .MuiTabs-wrapped': {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

const MuiStyledTab = styled(Tab)(() => ({
  '&.MuiTab-root': {
    padding: '0px 5px',
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
  },
  '&.Mui-selected': {
    color: '#e07344',
    backgroundColor: '#283046',
    background: 'linear-gradient(90.66deg, #e0734478 0%, #e0984466 100%)',
  },
}));

function ManageUsers() {
  const [approvedUserList, setApprovedUserList] = useState([]);
  const [pendingUserList, setPendingUserList] = useState([]);
  const allUserList = useSelector((state) => state.user.users);
  const userStore = useSelector((state) => state.user);
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers);
  }, []);

  const filterUserListAfterUpdate = (userList) => {
    const approvedUsers = [];
    const pendingUsers = [];
    userList?.forEach((user) => {
      // eslint-disable-next-line no-unused-expressions
      user.approved_by_customer_admin === true
        ? approvedUsers.push(user)
        : pendingUsers.push(user);
    });

    setApprovedUserList(approvedUsers);
    setPendingUserList(pendingUsers);
  };

  useEffect(() => {
    console.log('all user list', allUserList);
    if (allUserList) filterUserListAfterUpdate(allUserList);
  }, [allUserList]);

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
        <InviteModal open={open} />
        <MuiStyledTabs
          value={value}
          TabIndicatorProps={{ display: 'none' }}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <MuiStyledTab disableRipple label="Current user" {...a11yProps(0)} />
          <MuiStyledTab disableRipple label="Pending user" {...a11yProps(1)} />
          <MuiStyledTab disableRipple label="Invited user" {...a11yProps(2)} />
        </MuiStyledTabs>

        <Button
          disableRipple
          className=" !font-body"
          sx={{
            color: 'white',
            fontSize: '14px',
            fontWeight: 500,
            textTransform: 'none',
            border: 'solid 1px #82868b !important',
            borderRadius: '10px',
            width: '110px',
            height: '100%',
            background: 'linear-gradient(90.66deg, #e07344 0%, #e09844 100%)',
          }}
          // onClick={handleInvite}
        >
          <AiOutlineMail style={{ width: '16px', height: '16px' }} />
          Invite user
        </Button>
      </Box>
      <TabPanel value={value} index={0}>
        <TableUsers userList={approvedUserList} isLoading={userStore.loading} />
        {/* //complete delete operration as well */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TablePendingUsers userList={pendingUserList} isLoading={userStore.loading} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TableInvite userList={approvedUserList} isLoading={userStore.loading} />
      </TabPanel>
    </Box>
  );
}

export default ManageUsers;
