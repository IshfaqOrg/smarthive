import React, { useEffect } from 'react';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import {
  Avatar,
  Badge, Chip, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText,
  Paper, Popover, Typography,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getNotification, makeNotificationSeen } from '../../../redux/slices/notificationSlice';

function NotificationDropdown() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  //   const notification = useSelector((state) => state.notifications);
  //   useEffect(() => {
  //     if (localStorage.getItem('token') && notification.data.length === 0 && !notification.status && notification) {
  //     }
  //   }, [localStorage.getItem('token')]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const notification = useSelector((state) => state.notifications);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect(() => {
    if (!notification.data && localStorage('token') && notification.status && notification) dispatch(getNotification());
  }, [localStorage.getItem('token')]);
  return (
    <div className="mr-2 formFields">
      <IconButton id={id} onClick={handleClick}>
        <Badge badgeContent={notification?.data?.length || 0} color="error">
          <NotificationsNoneOutlinedIcon className="text-[#99a1ac] " />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        className="!drop-shadow-[0_35px_35px_rgba(100,100,100,0.25)]"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Paper className="w-96  p-0  !bg-theme-black ">
          <div className="flex">
            <Typography className="!bg-theme-black !text-slate-200 !font-body flex-grow !mb-0 !p-1 " variant="h6" color="white" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
              Inbox
            </Typography>
            <Chip size="small" className="flex self-center !mr-3" label={notification?.data?.length || 0} color="error" />
            {/* <Badge badgeContent={} color="error" /> */}
          </div>
          <List sx={{ pb: 1 }}>
            {notification.data.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={index}>
                <Divider color="#404656" />
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar
                      alt="notificationAvatar"
                      {...{
                        content: `${
                          (item?.actionFrom?.name.split(' ')?.[0]?.slice(0, 1).toUpperCase() || '') + (item?.actionFrom?.name?.split(' ')?.[1]?.slice(0, 1) || '').toUpperCase()
                        }`,
                      }}
                    />
                  </ListItemAvatar>
                  <ListItemText className=" !text-slate-400 !font-body" primary={item.heading} secondary={item.message} />
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </Popover>
    </div>

  );
}

export default NotificationDropdown;
