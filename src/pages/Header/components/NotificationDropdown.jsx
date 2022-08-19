import React, { useEffect } from 'react';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import {
  Avatar,
  Badge, IconButton, List, ListItem, ListItemAvatar, ListItemText,
  Paper, Popover, Typography,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

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

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className="mr-2">
      <IconButton onClick={handleClick}>
        <Badge badgeContent={4} color="error">
          <NotificationsNoneOutlinedIcon className="text-[#99a1ac]" />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {/* start  */}
        {/* <Paper square sx={{ pb: '50px' }}>
          <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
            Inbox
          </Typography>
          <List sx={{ mb: 2 }}>
            {messages.map((item) => (
              <React.Fragment key={id}>
                <ListItem button>
                  <ListItemAvatar>
                    <Avatar
                      alt="Profile Picture"
                      {...{
                        content: `${
                          (item?.actionFrom?.name.split(' ')?.[0]?.slice(0, 1).toUpperCase() || '') + (item?.actionFrom?.name?.split(' ')?.[1]?.slice(0, 1) || '').toUpperCase() || 'NU'
                        }`,
                      }}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={item.heading} secondary={item.message} />
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Paper> */}
        {/* end */}
      </Popover>
    </div>

  );
}

export default NotificationDropdown;
