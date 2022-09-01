import {
  Avatar, ButtonBase, Box, List, ListItem,
  Popover, Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { FiUser, FiPower, FiCheckSquare } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import { CUSTOMER_ADMIN, userRole } from '../../../constants/index';
import avator from '../../../assets/images/avatars/avatar.png';
import { getUserInfo } from '../../../redux/slices/userSlice';
import { logoutUser } from '../../../redux/slices/RegisterationSlice';

const useStyles = makeStyles({
  profilePopover: {
    borderWidth: '0px',
    boxShadow: '0 3px 9px rgb(56 57 58), 0 3px 6px rgb(56 57 58)',
  },
  listItemIcon: {
    width: '14px',
  },
});
function ProfileBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const userState = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    if (!userState.length) dispatch(getUserInfo());
    console.log(userState);
  }, [userState]);

  return (
    <>
      <ButtonBase className="flex " disableRipple id={id} onClick={handleClick}>
        <Avatar src={userState?.profile_image || avator} alt="profile avatar" sx={{ width: '35px', height: '35px ' }} />
        <Box>
          <Typography variant="h6" className="!text-sm font-body font-bold text-white">
            {userState?.full_name}
            <ExpandMoreIcon className="text-[#99a1ac]" />
          </Typography>
          <Typography variant="p" className="!text-xs font-body text-[#99a1ac] !relative !bottom-2">{userRole[userState?.role] || (userState?.role?.includes('admin') && 'ADMIN')}</Typography>
        </Box>
      </ButtonBase>
      <Popover
        id={id}
        className="!drop-shadow-[0_35px_35px_rgba(100,100,100,0.25)] "
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={{ top: 70, left: 1300 }}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        classes={{ paper: classes.profilePopover }}
      >
        <Stack className="p-0  !bg-theme-black">
          <List>
            <ListItem button classname="p-1" classes={{ button: classes.listItemIcon }}>
              <Link to="profile" className="flex space-x-3 ">

                <FiUser className=" !text-white font-body" variant="outlined" />

                <Typography className="!text-sm !text-white !font-body">Profile</Typography>
              </Link>
            </ListItem>
            {userState?.role === CUSTOMER_ADMIN
            && (
            <ListItem button>
              <Link to="/integerations" className="flex space-x-3">
                <FiCheckSquare className=" !text-white font-body" variant="outlined" />
                <Typography className="!text-sm !text-white !font-body">Integerations</Typography>
              </Link>
            </ListItem>
            )}
            <ListItem
              button
              onClick={() => dispatch(logoutUser())}
            >
              <Link to="/" className="flex space-x-3">
                <FiPower className=" !text-white font-body" variant="outlined" />
                <Typography className="!text-sm !text-white !font-body">Logout</Typography>
              </Link>
            </ListItem>
          </List>
        </Stack>
      </Popover>
    </>
  );
}

export default ProfileBar;
