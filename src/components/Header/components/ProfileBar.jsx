import {
  Avatar, ButtonBase, Box,
  Badge, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText,
  Paper, Popover, Typography, ListItemIcon,
} from '@mui/material';
import { Stack } from '@mui/system';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import React, { useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CUSTOMER_ADMIN, userRole } from '../../../constants/index';
import avator from '../../../assets/images/avatars/avatar.png';
import { getUserInfo } from '../../../redux/slices/userSlice';
import { logoutUser } from '../../../redux/slices/RegisterationSlice';

function ProfileBar() {
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

  const userState = useSelector((state) => state.user);

  useEffect(() => {
    console.log('here');
    if (!userState?.id) dispatch(getUserInfo);
  }, []);

  useEffect(() => {
    console.log(userState);
    if (userState?.id) console.log(userState);
  }, [userState]);

  return (
    <>
      <ButtonBase className="flex " disableRipple id={id} onClick={handleClick}>
        <Avatar src={userState?.profile_image || avator} alt="profile avatar" sx={{ width: '35px', height: '35px ' }} />
        <Box>
          <Typography variant="h6" className="!text-sm font-body font-bold text-white">
            {userState?.full_name}
            <ExpandMoreIcon />
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
      >
        <Stack className="p-0  !bg-theme-black ">
          <List sx={{ pb: 1 }}>

            <ListItem button>
              <Link to="profile" className="flex">
                <ListItemIcon>
                  <PermIdentityOutlinedIcon className=" !text-slate-400 font-body" variant="outlined" />
                </ListItemIcon>
                <Typography className="!text-sm !text-slate-400 !font-body">Profile</Typography>
              </Link>
            </ListItem>
            {userState?.role === CUSTOMER_ADMIN
            && (
            <ListItem button>
              <ListItemIcon>
                <CheckBoxIcon className=" !text-slate-400 font-body" variant="outlined" />
              </ListItemIcon>
              <Link to="/integerations">
                <Typography className="!text-sm !text-slate-400 !font-body">Integerations</Typography>
              </Link>
            </ListItem>
            )}

            <ListItem
              button
              onClick={() => dispatch(logoutUser())}
            >
              <Link to="/" className="flex">
                <ListItemIcon>
                  <PowerSettingsNewIcon className=" !text-slate-400 font-body" variant="outlined" />
                </ListItemIcon>
                <Typography className="!text-sm !text-slate-400 !font-body">Logout</Typography>
              </Link>
            </ListItem>
          </List>
        </Stack>
      </Popover>
    </>
  );
}

export default ProfileBar;
