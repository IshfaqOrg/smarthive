import React, { useState } from 'react';
import {
  Box, IconButton, InputBase, Modal, Paper,
} from '@mui/material';
import { Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import emailIcon from '../../../assets/images/icons/Message.png';
import closeIcon from '../../../assets/images/icons/closeIcon.png';
import LoadingButtonComponent from '../../../components/inputs/LoadingButtonComponent';
import { inviteUser } from '../../../redux/slices/invitedUsers';

function InviteModal({
  open, message, handleClose,
}) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const initialValues = {
    email: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      dispatch(inviteUser(values.email));
      // setIsLoading(false);
    },
  });

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40vw',
    bgcolor: 'black',
    border: '2px solid #000000',
    boxShadow: 24,
    p: 4,
    borderRadius: '20px',
    // opacity: 0.7,
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
          <div className="flex justify-between w-full mt-3">
            <div className=" mb-3 w-full">
              <h4 className="text-2xl !text-left font-thin text-white font-body">Invite user</h4>
              <h6 className="text-[#99a1ac] !text-left text-xs font-body mt-1">Please enter the email address below to invite the user</h6>
            </div>
            <IconButton className="items-center h-full  " onClick={handleClose}>
              <img src={closeIcon} alt="close-icon" />
            </IconButton>
          </div>
          <Formik>
            <Form className="w-full" onSubmit={formik.handleSubmit}>
              <Paper
                className="w-full !rounded-md focus:border-orange- 400 !textInput !rounded-l-2xl"
                sx={{
                  border: 1,
                  display: 'flex',
                  alignItems: 'center',
                  height: '44px',
                  borderColor: '#656669',
                  backgroundColor: '#283046',
                  '&:hover': {
                    borderColor: 'orange',
                  },
                }}
              >
                <Box
                  className="rounded-l-2xl"
                  sx={{
                    height: '100%',
                    backgroundColor: '#272b30',
                    p: '12px',
                  }}
                >
                  <img src={emailIcon} alt="Your email address" style={{ alignSelf: 'center' }} />
                </Box>
                <InputBase
                  name="email"
                  className="bg-[#283046] w-full rounded-lg "
                  sx={{ height: '100%', input: { fontSize: '14px', color: 'white' } }}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoComplete="off"
                  placeholder="User email"
                />

              </Paper>
              <div className="mb-1" style={{ color: 'white', fontSize: 12 }}>
&nbsp;
                {formik.touched.email && formik.errors.email ? (
                  formik.errors.email
                ) : null}

              </div>

              <LoadingButtonComponent
                text="Invite user"
                loading={isLoading}
                disabled={!formik.dirty || !formik.isValid}
              />
            </Form>

          </Formik>
        </Box>
      </Modal>
    </div>
  );
}

export default InviteModal;
