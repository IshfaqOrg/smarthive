import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { Formik, Form, useFormik } from 'formik';
import {
  Autocomplete,
  Box, InputBase, Paper, Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import profileIcon from '../../assets/images/icons/Profile.png';
import emailIcon from '../../assets/images/icons/Message.png';
import companyIcon from '../../assets/images/icons/Globe.png';
import { fillForm, getUserByCode } from '../../redux/slices/RegisterationSlice';
import LoadingButtonComponent from '../../components/inputs/LoadingButtonComponent';

const industryOptions = [{ label: 'Financial', id: '0' }, { label: 'SLED', id: '1' }, { label: 'Medical', id: '2' }];

// const useStyles = makeStyles({
//   loadingButton: {
//     color: 'white',
//     '&.Mui-disabled': {
//       color: '#94a3b8  !important',
//       background: 'rgb(163,94,51) !important',
//     },
//     ' &:hover ': {
//       boxShadow: '0 3px 9px rgb(56 57 58), 0 3px 6px rgb(56 57 58)',
//     },
//   },
// });

function SignUp({
  // eslint-disable-next-line react/prop-types
  handleAuth, formData, setFormData,
}) {
  const dispatch = useDispatch();
  const registerationData = useSelector((state) => state?.registeration);
  // const authSelector = useSelector((state) => state.registeration.authenticate);
  // const userSelector = useSelector(
  //   (state) => state.registeration.userDetails.data,
  // );

  // const [stepper, setStepper] = useState(null);
  // const [userInfo, setUserInfo] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [resetForm, setResetForm] = useState(false);
  // const registerationData = useSelector((state) => state?.registeration);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
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
    if (registerationData.userDetails.userEmail) {
      formik.setValues({
        industry: registerationData.userDetails?.company.company_name,
        industryType: registerationData.userDetails?.company.industry_type,
        email: registerationData.userDetails?.userEmail,
      });
    }
    setDisabled(registerationData.userDetails);
  }, [registerationData.userDetails.userEmail]);

  useEffect(() => {
    const gettingUserByCode = async () => {
      const pathname = window.location.href;
      if (pathname.includes('code=')) {
        const registerCode = pathname.split('=')[1];
        await dispatch(getUserByCode({ code: registerCode }));
      }
    };
    try {
      gettingUserByCode();
    } catch (err) { console.log(err); }
  }, []);// fix

  useEffect(() => {
    if (resetForm || registerationData.form.resetForm) {
      formik.resetForm();
    }
  }, [resetForm, registerationData?.form]);

  return (
    <div className="px-2 mt-14 w-4/5">
      <div className="intro  mb-3 w-5/6">
        <h4 className="text-2xl font-bold text-white mt-3 font-body">Welcome to Smart Hive</h4>
        <h6 className="text-[#99a1ac] text-sm font-body">The best zero password system to keep our customer secure</h6>
      </div>

      <div className="formFields">
        <Formik>
          <Form onSubmit={formik.handleSubmit}>
            <div className="signupInput flex flex-col space-y-2 justify-center">
              {inputData.map((e) => (
                <div className="mt-2" key={e.key}>
                  <Paper
                    className="w-full !rounded-md !rounded-l-2xl"
                    sx={{
                      border: 1,
                      display: 'flex',
                      alignItems: 'center',
                      height: '46px',
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
                      autoComplete="off"
                      placeholder={e.placeholder}
                    />
                  </Paper>
                  <div className="mb-1" style={{ color: 'white', fontSize: 12 }}>
                      &nbsp;
                    {formik.touched[e.value] && formik.errors[e.value] ? (
                      formik.errors[e.value]
                    ) : null}
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
                    <img src={companyIcon} alt="Your Company Name..." style={{ alignSelf: 'center' }} />
                  </Box>
                  <Autocomplete
                    className="w-full"
                    sx={{
                      input: {
                        fontSize: '14px',
                        color: 'white',
                        '&:hover': {
                          borderColor: 'orange',
                        },
                      },
                    }}
                    options={industryOptions}
                    value={formik.values.industryType}
                    isOptionEqualToValue={(option, value) => (value
                      ? option.label === value : true)}
                    onChange={(e, value) => {
                      formik.setFieldValue('industryType', value.label, true);
                      formik.handleBlur(value.label);
                    }}
                    renderInput={(params) => (
                      <div ref={params.InputProps.ref}>
                        <InputBase
                          inputProps={{ className: 'w-full' }}
                          onClick={() => {
                            formik.setFieldTouched('industryType', true);
                          }}
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

  &nbsp;
                  {formik.touched.industryType && formik.errors.industryType ? (
                    formik.errors.industryType
                  ) : null}
                </div>
              </div>
              {/* <LoadingButton
                className="btn p-1 h-12 !text-xs"
                type="submit"
                variant="contained"
                classes={{ root: classes.loadingButton }}
                disabled={!formik.dirty || !formik.isValid}
                loading={isLoading}
                sx={{ borderRadius: '9px', width: '100%', marginTop: '1rem' }}
              >
                Next
              </LoadingButton> */}
              <LoadingButtonComponent
                disabled={!formik.dirty || !formik.isValid}
                loading={isLoading}
                text="Next"
                sx={{ marginTop: '1rem' }}
              />
              <Typography className="relative z-10 " color="#d0d2d6" align="center" variant="body2" mt={2}>
                Already have an account?
                <Link to="/login">
                  <u className="text-stone-500 hover:text-orange-400"> Sign In</u>
                </Link>
              </Typography>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default SignUp;
