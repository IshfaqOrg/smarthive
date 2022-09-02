/* eslint-disable no-unused-vars */
import {
  Paper, Box, InputBase, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  Formik, Form, useFormik,
} from 'formik';
import * as Yup from 'yup';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import { LoadingButton } from '@mui/lab';
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import emailIcon from '../../assets/images/icons/Message.png';
import { sendEmailOTP } from '../../redux/slices/LoginSlice';
import { getUserDetailsByToken, loginUser } from '../../redux/slices/RegisterationSlice';
import ModalWindow from '../../components/Modal/ModalWindow';

const SUPER_ADMIN = 'super_admin';

const useStyles = makeStyles({
  loadingButton: {
    color: 'white',
    '&.Mui-disabled': {
      color: '#94a3b8 !important',
      background: 'rgb(163,94,51) !important',
    },
    ' &:hover ': {
      boxShadow: '0 3px 9px rgb(56 57 58), 0 3px 6px rgb(56 57 58)',
    },
  },
});

function Login({ formData }) {
  const classes = useStyles();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const userSelector = useSelector((state) => state.registeration.userDetails);
  const [showOtp, setShowOtp] = useState(false);
  const [centeredModal, setCenteredModal] = useState(false);
  const [message, setMessage] = useState('');
  const registrationForm = useSelector((state) => state.registeration.form);
  const registrationProcess = useSelector(
    (state) => state.registeration.userDetails,
  );
  const loginSelector = useSelector((state) => state.login);
  const authSelector = useSelector((state) => state.registeration?.authenticate);
  const dispatch = useDispatch();
  const handleOpen = () => setCenteredModal(true);
  const handleClose = () => setCenteredModal(false);
  // inital values for the form
  const initialValues = {
    email: '',
  };

  useEffect(() => {
    const asyncLogin = async () => {
      const urlIndex = window.location.href.split('=');
      const domain = process.env.REACT_APP_DOMAIN;
      if (
        urlIndex[0] === `${domain}/login#access_token`
      ) {
        const tokenUrl = urlIndex[1];
        const tokenIndex = tokenUrl.split('&');
        const token = `${tokenIndex[0]}`;
        const expireTime = urlIndex[3].split('&')[0];
        setIsLoading(true);
        await dispatch(getUserDetailsByToken(token));
        dispatch(loginUser({ token, expireTime }));
        setIsLoading(false);
      } else if (
        urlIndex[0] === `${domain}/login#error`
      ) {
        const token = decodeURI(urlIndex[2]) || 'Unknown error occured';
        const expireTime = urlIndex[3].split('&')[0];
        setCenteredModal(true);
        setMessage(token);
        // toast.error(token);
        navigate('/login', { replace: true });
      } else {
        // history.push('/login');
        navigate('/login', { replace: true });
      }
    };
    try {
      asyncLogin();
    } catch (error) { console.log(error); }
  }, []);

  useEffect(() => {
    if (loginSelector.error || registrationProcess.error) {
      const errorMessage = loginSelector?.message?.error
        || registrationProcess?.message?.error
        || JSON.stringify(registrationProcess?.message?.error);
      console.log(errorMessage);
    }
  }, [loginSelector, registrationProcess]);

  useEffect(() => {
    if (authSelector.isLoggedIn) navigate((userSelector.role === SUPER_ADMIN) ? '/dashboard' : '/resilence', { replace: true });
  }, [authSelector?.isLoggedIn]);

  useEffect(() => {
    if (registrationForm.resetForm) {
      setShowOtp(false);
    }
  }, [registrationForm]);

  useEffect(() => {
    if (loginSelector.error || registrationProcess.error) {
      setCenteredModal(true);
      setMessage(
        loginSelector?.message?.error
        || registrationProcess?.message?.error
        || JSON.stringify(registrationProcess?.message?.error),
      );
    }
  }, [loginSelector, registrationProcess]);

  useEffect(() => {
    if (loginSelector.response) {
      if (loginSelector.response?.valid) {
        if (loginSelector.response?.phone_number) {
          // Show Otp page
          setShowOtp(true);
        } else {
          setMessage(loginSelector?.response?.message);
          setCenteredModal(true);
          // history.push('/')
        }
      }
    }
  }, [loginSelector.loading]);

  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string().email()
      .required('Email is mandatory'),
  });

  // form using formik
  const formik = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const data = { email: values.email };
      setIsLoading(true);
      await dispatch(sendEmailOTP(data));
      setIsLoading(false);
    },
  });
  const resendOTP = async (email) => {
    setIsLoading(true);
    await dispatch(sendEmailOTP({ email }));
    setIsLoading(false);
  };

  return (
    <div className="relative w-2/3 inset-x-0 top-8 left-5 mb-2">
      <div className="intro  mb-3  ">
        <h4 className="text-2xl font-bold text-white mt-3 font-body">Welcome to Smart Hive</h4>
        <h6 className="text-[#99a1ac] text-sm font-body mt-2">Please sign-in to your account</h6>
      </div>
      <div className="mt-1">
        <Formik>
          <Form onSubmit={formik.handleSubmit}>
            <Paper
              className="w-full !rounded-md focus:border-orange-400 !textInput !rounded-l-2xl"
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
                placeholder="Your Email Address... "
              />

            </Paper>
            <div className="mb-1" style={{ color: 'white', fontSize: 12 }}>
&nbsp;
              {formik.touched.email && formik.errors.email ? (
                formik.errors.email
              ) : null}

            </div>
            <LoadingButton
              sx={{
                borderRadius: '9px', marginTop: '1rem',
              }}
              inputProps
              className="btn !p-2 !h-12 !text-xs w-full "
              type="submit"
              classes={{ root: classes.loadingButton }}
              disabled={!formik.dirty || !formik.isValid}
              variant="contained"
              loading={isLoading}
            >
              Login

            </LoadingButton>

          </Form>

        </Formik>
      </div>
      <Typography className="relative z-10 " color="#d0d2d6" align="center" variant="body2" mt={2}>
        New on our platform?
        <Link to="/">
          <u className="text-stone-500 hover:text-orange-400">  Create an account</u>

        </Link>
      </Typography>
      <ModalWindow
        open={centeredModal}
        message={message}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
    </div>
  );
}

export default Login;
