import {
  Paper, Box, InputBase, Typography, Button,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Formik, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import { LoadingButton } from '@mui/lab';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { sendEmailOTP } from '../../redux/slices/LoginSlice';

function Login({ formData }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  // inital values for the form
  const initialValues = {
    email: '',
  };
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
      await dispatch(sendEmailOTP(data));
    },
  });

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
              className="w-full !rounded-md !rounded-l-2xl"
              sx={{
                border: 1,
                display: 'flex',
                alignItems: 'center',
                height: '44px',
                borderColor: '#656669',
                backgroundColor: '#283046',
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
                <MailRoundedIcon />
              </Box>
              <InputBase
                name="email"
                className="bg-[#283046] w-full rounded-lg "
                sx={{ height: '100%', input: { fontSize: '14px', color: 'white' } }}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Your Email Address... "
              />

            </Paper>
          </Form>

        </Formik>
      </div>
      <div className="mb-1" style={{ color: 'white', fontSize: 12 }}>
&nbsp;
        {formik.touched.email && formik.errors.email ? (
          formik.errors.email
        ) : null}

      </div>
      <LoadingButton
        sx={{
          padding: '8px', borderRadius: '9px', width: '100%', marginTop: '1rem',
        }}
        inputProps
        className="btn p-3"
        type="submit"
        variant="contained"
        loading={isLoading}
                // disabled={}
      >
        Login

      </LoadingButton>

      <Typography className="flex z-10" color="#d0d2d6" align="center" variant="body2" mt={2}>
        New on our platform?
        <Link to="/signup">
          Create an account
        </Link>
      </Typography>
    </div>
  );
}

export default Login;
