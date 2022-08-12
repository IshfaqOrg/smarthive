import {
  Button, InputAdornment, MenuItem, Select, TextField, Typography,
} from '@mui/material';
import React, { useState } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useFormik, Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { LoadingButton } from '@mui/lab';
import { fillForm } from '../../redux/slices/RegistrationSlice';

function AuthenticationType({ backButtonClicked }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCode, setSelectCode] = useState('');
  const registrationFormDetails = useSelector((state) => state.registration?.form);
  const [selectedValue, setSelectValue] = useState('email');
  const [emailField, setEmailField] = useState(true);
  const [phoneField, setPhoneField] = useState(false);
  console.log(backButtonClicked);
  const registrationUserDetails = useSelector(
    (state) => state.registration.userDetails,
  );

  const initialValues = {
    ...registrationFormDetails,
    phoneNumber: registrationFormDetails?.phoneNumber?.replace(selectedCode, ''),
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const data = {
        ...values,
        ...registrationUserDetails.userEmail && { apporved: true },
      };
      // if (!data.phoneNumber) delete data.phoneNumber;

      if (data.authType) {
        // data.authType = selectedValue?.toLowerCase();
        dispatch(fillForm(data));
        setIsLoading(true);
      }
    },
  });
  const handlePhoneBlock = () => {
    setPhoneField(true);
    setEmailField(false);
  };

  const handleEmailBlock = () => {
    setPhoneField(false);
    setEmailField(true);
  };

  const handleChange = (e) => {
    setSelectValue(e.target.value);
    if (e?.target.value === 'email') {
      handleEmailBlock();
    } else {
      handlePhoneBlock();
    }
  };
  { console.log(registrationUserDetails); }
  return (
    <div className="font-body">
      { true && (
      <Button
        variant="contained"
        onClick={() => backButtonClicked(true)}
        sx={{
          borderRadius: '8px',
          padding: '5px',
          '&:hover': { backgroundColor: '#596067' },
          backgroundColor: '#596067',
          width: '',
        }}
      >
        <ChevronLeftIcon sx={{ fontSize: '12px' }} />
        {' '}
        <span style={{
          fontColor: '#eaf5ff',
          fontSize: '12px',
        }}
        >
          Back
        </span>
      </Button>
      )}

      <div className="intro  mb-3  ">
        <h4 className="text-2xl font-bold text-white mt-3 font-body">Authentication Type</h4>
        <h6 className="text-[#99a1ac] text-sm font-body">Select one method to proceed</h6>
      </div>
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <div className="inputs w-3/4">
            <div>
              <Select
                className="w-full bg-[#283046] input-group-text"
                id="outlined-basic"
                variant="outlined"
                name="authType"
                labelId="Select your industry type"
                value={selectedValue}
                onChange={(e) => handleChange(e)}
                disabled={
                Object.keys(registrationUserDetails.data).length !== 0
              }
                size="small"
                sx={{
                  padding: '5px',
                  color: '#99a1ac',
                  fontSize: '13px',
                  backgroundColor: '#283046',
                  borderRadius: '18px',
                }}
              >
                <MenuItem sx={{ color: '#283046', backgroundColor: '#596067' }} value="email">Email</MenuItem>
                <MenuItem sx={{ backgroundColor: '#596067' }} value="phoneNumber">Phone Number</MenuItem>
              </Select>
              <div className="mb-1" style={{ fontSize: 12 }}>
            &nbsp;
                {formik.touched.authType && formik.errors.authType
                  ? formik.errors.authType
                  : null}
              </div>
            </div>
            <div>
              { emailField ? (
                <div>
                  <TextField
                    name="email"
                    readOnly
                    className="w-full bg-[#283046] input-group-text"
                    variant="outlined"
                    autoComplete="off"
                    onChange={(e) => {
                      handleEmailBlock();
                      formik.handleChange(e);
                    }}
                    onBlur={formik.handleBlur}
                    defaultValue={formik.values.email}
                    // value={formik.values.email}
                    placeholder="Fill the Email address"
                    size="small"
                    sx={{
                      input: { padding: '15px', color: '#99a1ac', fontSize: '13px' }, backgroundColor: '#283046', borderRadius: '18px',
                    }}
                    InputProps={{
                      readOnly: true,
                      startAdornment: (
                        <InputAdornment
                          position="start"
                          sx={{
                            backgroundColor: (theme) => theme.palette.divider,
                            borderTopLeftRadius: (theme) => `${theme.shape.borderRadius}px`,
                            borderBottomLeftRadius: (theme) => `${theme.shape.borderRadius}px`,
                          }}
                        >
                          <EmailOutlinedIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <div className="mb-1" style={{ fontSize: 12 }}>
                  &nbsp;
                    {formik.touched.email && formik.errors.email
                      ? formik.errors.email
                      : null}
                  </div>

                </div>
              ) : null}
            </div>
            <div>
              <LoadingButton
                disabled={isLoading}
                className="btn p-2 py-3"
                type="submit"
                variant="contained"
                loading={isLoading}
                // disabled={}
                sx={{ borderRadius: '9px', width: '100%', marginTop: '0.5rem' }}
              >
                Confirm

              </LoadingButton>
            </div>
          </div>
        </Form>
      </Formik>

    </div>
  );
}

export default AuthenticationType;
