import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Form, useFormik } from 'formik';
import {
  Autocomplete,
  Box, InputBase, Paper, Typography,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import profileIcon from '../../../assets/images/icons/Profile.png';
import emailIcon from '../../../assets/images/icons/Message.png';
import companyIcon from '../../../assets/images/icons/Globe.png';
import { fillForm } from '../../../redux/slices/RegistrationSlice';

const industryOptions = [{ label: 'Financial', id: '0' }, { label: 'SLED', id: '1' }, { label: 'Medical', id: '2' }];
function SignUp({
  // eslint-disable-next-line react/prop-types
  handleAuth, formData, setFormData,
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registrationData = useSelector((state) => state?.registration);

  // const authSelector = useSelector((state) => state.registration.authenticate);
  // const userSelector = useSelector(
  //   (state) => state.registration.userDetails.data,
  // );

  // const [stepper, setStepper] = useState(null);
  // const [userInfo, setUserInfo] = useState({});
  // const [resetForm, setResetForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [disabled, setDisabled] = useState(null);
  // const [backButtonClicked, setBackButtonClicked] = useState(false);
  // const ref = useRef(null);

  // inital values for the form
  const initialValues = {
    fullName: '',
    email: '',
    industry: '',
    industryType: '',
    ...formData,
  };

  // Validation schema
  const validationSchema = Yup.object({
    fullName: Yup.string().required('Your full name is required'),
    email: Yup.string().email()
      .required('Email is mandatory'),

    industry: Yup.string().required('Company name is mandatory !'),
    industryType: Yup.string().required('Industry type is mandatory !'),
  });

  // form using formik
  const formik = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      const data = {
        fullName: values.fullName,
        email: values.email,
        industry: values.industry,
        industryType: values.industryType,
      };
      dispatch(fillForm(data));
      // setIsLoading(true);
      setFormData(data);
      // navigate('/GetOtp')
      setIsLoading(false);
      handleAuth(false);
    },
  });

  // data for the inputs that are to be rendered
  const inputData = [{
    icon: profileIcon,
    alt: 'profile picture',
    value: 'fullName',
    placeholder: 'Your full name...',
    key: 'input 1',
  },
  {
    icon: emailIcon,
    alt: 'email picture',
    value: 'email',
    placeholder: 'Your email address...',
    key: 'input 2',
  },
  {
    icon: companyIcon,
    alt: 'industry picture',
    value: 'industry',
    placeholder: 'Your Company Name...',
    key: 'input 3',
  },
  ];
  // Hooks

  // In case user's reached form through invitation,in such case code will be generated in URL,
  // the email will be set, it will be checked if reducer has email or not,
  //  in case it does we will set the values of form

  useEffect(() => {
    if (registrationData.userDetails.userEmail) {
      formik.setValues({
        industry: registrationData.userDetails?.company.company_name,
        industryType: registrationData.userDetails?.company.industry_type,
        email: registrationData.userDetails?.userEmail,
      });
    }
    setDisabled(registrationData.userDetails);
  }, [registrationData.userDetails.userEmail]);

  return (
    <>
      {/* <Routes>
        <Route
          path="/"
          element={<Home />}
        /> */}

      {/* </Routes> */}
      <div className="px-2 mt-14 ">
        <div className="intro  mb-3 ">
          <h4 className="text-2xl font-bold text-white mt-3 font-body">Welcome to Smart Hive</h4>
          <h6 className="text-[#99a1ac] text-sm font-body">The best zero password system to keep our customer secure</h6>
        </div>

        <div className="formFields ">
          <Formik>

            <Form onSubmit={formik.handleSubmit}>
              <div className="signupInput justify-center">
                {inputData.map((e) => (
                  <div className="mt-1" key={e.key}>
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
                          // backgroundColor: (theme) => theme.palette.divider,
                          // borderTopLeftRadius: (theme) => `${theme.shape.borderRadius}px`,
                          // borderBottomLeftRadius: (theme) => `${theme.shape.borderRadius}px`,
                          p: '12px',
                        }}
                        aria-label="menu"
                      >
                        <img src={e.icon} alt={e.placeholder} style={{ alignSelf: 'center' }} />

                      </Box>
                      <InputBase
                        name={e.value}
                        className="bg-[#283046] w-full rounded-lg autofill:bg-transparent"
                        sx={{ height: '100%', input: { fontSize: '14px', color: 'white' } }}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values[e.value]}
                        placeholder={e.placeholder}
                      />
                    </Paper>
                    <div className="mb-1" style={{ color: 'white', fontSize: 12 }}>
                      &nbsp;
                      {formik.touched[e.value] && formik.errors[e.value] ? (
                        formik.errors[e.value]
                      ) : null}
                      {' '}

                    </div>
                  </div>
                ))}
                <div className="mt-1">
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
                      <img src={companyIcon} alt="Your Company Name..." style={{ alignSelf: 'center' }} />

                    </Box>
                    <Autocomplete
                      className="w-full"
                      sx={{ input: { fontSize: '14px', color: 'white' } }}
                      options={industryOptions}
                      defaultValue={formik.values.industryType}
                      onChange={(e, value) => {
                        formik.setFieldValue('industryType', value.label, true);
                        formik.handleBlur(value.label);
                      }}
                      renderInput={(params) => (
                        <div ref={params.InputProps.ref}>
                          <InputBase
                            inputProps={{ className: 'w-full' }}
                          // eslint-disable-next-line react/jsx-props-no-spreading
                            {...params}
                            name="industryType"
                            placeholder="Select your industry type"
                          />

                        </div>
                      )}
                    />
                  </Paper>

                  <div className="mb-1" style={{ color: 'white', fontSize: 12 }}>
                    {' '}
&nbsp;
                    {formik.touched.industryType && formik.errors.industryType ? (
                      formik.errors.industryType
                    ) : null}

                  </div>

                </div>
                <LoadingButton
                  className="btn p-2 py-2"
                  type="submit"
                  variant="contained"
                  loading={isLoading}
                  sx={{ borderRadius: '9px', width: '100%', marginTop: '1rem' }}
                >
                  Next

                </LoadingButton>
                <Typography className="relative z-10" color="#d0d2d6" align="center" variant="body2" mt={2}>
                  Already have an account?
                  <Link to="/login">
                    Sign In

                  </Link>
                </Typography>
              </div>

            </Form>
          </Formik>

        </div>
      </div>

    </>
  );
}

export default SignUp;
