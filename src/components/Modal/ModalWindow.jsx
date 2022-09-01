import React from 'react';
import {
  Avatar,
  Box, Button, Modal, Typography,
} from '@mui/material';

function ModalWindow({
  open, message, handleClose,
}) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    border: '2px solid #000000',
    boxShadow: 24,
    p: 4,
    borderRadius: '20px',
    opacity: 0.7,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '&:focus': {
      outline: 'none',
    },
  };
  return (

    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="!px-4 !py-4" sx={style}>
          <Avatar sx={{ width: 56, height: 56 }}>MJ</Avatar>
          <Typography id="modal-modal-description" color="white" className="!font-body !text-sm" sx={{ mt: 2 }}>
            {message}
          </Typography>
          <Button className="!rounded-md px-2 py-2 !bg-[#2f5b9971]" onClick={handleClose} variant="contained">OK</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalWindow;
