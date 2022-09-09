import {
  Avatar, ButtonBase, Box, List, ListItem,
  Popover, Typography, styled,
} from '@mui/material';
import { Stack } from '@mui/system';
import React, { useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { FiUser, FiPower, FiCheckSquare } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { CUSTOMER_ADMIN, userRole } from '../../../constants/index';
import avator from '../../../assets/images/avatars/avatar.png';
import { getUserInfo } from '../../../redux/slices/userSlice';
import { logoutUser } from '../../../redux/slices/RegisterationSlice';

const PopoverComponent = styled(Popover)(() => ({
  '&.MuiPopover-root': {
    borderWidth: '0px',
    boxShadow: '0 3px 9px rgb(56 57 58), 0 3px 6px rgb(56 57 58)',
  },
}));

// const ListItemComponent = styled(Popover)(() => ({
//   '&.MuiPopover-root': {
//     width: '14px',
//   },
// }));

function ProfileBar() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const handleClose = () => {
    setAnchorEl(null);
  };

  const userState = useSelector((state) => state.user.userInfo);

  useEffect(() => {
    if (!userState?.id) {
      dispatch(getUserInfo());
    }
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
      {
        open && (
        <PopoverComponent
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
          <Stack className="p-0  !bg-theme-black">
            <List>
              <ListItem button className="p-1" onClick={handleClose}>
                <Link className="flex space-x-3 " to="profile">
                  <FiUser className=" !text-white font-body" variant="outlined" />
                  <Typography className="!text-sm !text-white hover:text-orange-400 !font-body">Profile</Typography>
                </Link>
              </ListItem>
              {userState?.role === CUSTOMER_ADMIN
            && (
            <ListItem button onClick={handleClose}>
              <Link to="/integerations" className="flex space-x-3">
                <FiCheckSquare className=" !text-white font-body" variant="outlined" />
                <Typography className="!text-sm !text-white hover:text-orange-400 !font-body">Integerations</Typography>
              </Link>
            </ListItem>
            )}
              <ListItem
                button
                onClick={() => dispatch(logoutUser())}
              >
                <Link to="/" className="flex space-x-3" onClick={handleClose}>
                  <FiPower className=" !text-white font-body" variant="outlined" />
                  <Typography className="!text-sm !text-white hover:text-orange-400 !font-body">Logout</Typography>
                </Link>
              </ListItem>
            </List>
          </Stack>
        </PopoverComponent>
        )
      }

    </>
  );
}

export default ProfileBar;
