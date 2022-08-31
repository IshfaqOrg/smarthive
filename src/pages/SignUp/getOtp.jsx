import {
  Autocomplete,
  Box,
  Button, FormControl, InputAdornment, InputBase, ListItemIcon,
  ListItemText, MenuItem, Paper, Select, TextField,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useFormik, Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
// import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { LoadingButton } from '@mui/lab';
import * as Yup from 'yup';
// import { fillForm, signUpUser, updateUserAtSignup } from '../../../redux/slices/RegisterationSlice';
// import { getCountryCode } from '../../../redux/slices/CountrySlice';
// import CountryList from '../../../utility/countriesWithFlag';
// import { CssTextField } from './muiComponents';

function AuthenticationType({ backButtonClicked, formData, setFormData }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCode, setSelectedCode] = useState('');
  const registerationFormDetails = useSelector((state) => state.registeration?.form);
  const [selectedValue, setSelectValue] = useState('email');
  const [emailField, setEmailField] = useState(true);
  const [phoneField, setPhoneField] = useState(false);
  const [userCountry, setUserCountry] = useState();
  const [item, setItems] = useState();
  const [resetForm, setResetForm] = useState(false);
  const [open, setOpen] = useState(false);
  const registerationUserDetails = useSelector(
    (state) => state.registeration.userDetails,
  );
  const initialValues = {
    ...registerationFormDetails,
    ...formData,
    phoneNumber: registerationFormDetails?.phoneNumber?.replace(selectedCode, ''),
  };
  const validationSchema = Yup.object({
    otp: Yup.string()
      .required('Mobile number is required')
      .min(10, 'Mobile number is not valid')
      .max(10, 'Mobile number is not valid'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const data = {
        ...values,
        ...registerationUserDetails.userEmail && { apporved: true },
      };
    },
  });
  //   },
  // });

  return (
    <div className="font-body px-2 mt-14 w-full flex justify-center">
      <div className="intro  mb-3 w-4/5">

        { true && (
          <Button
            variant="contained"
            onClick={backButtonClicked}
            sx={{
              borderRadius: '8px',
              padding: '5px',
              '&:hover': { backgroundColor: '#596067' },
              backgroundColor: '#596067',
              width: '',
            }}
          >
            <ChevronLeftIcon sx={{ fontSize: '12px' }} />
            <span style={{
              fontColor: '#eaf5ff',
              fontSize: '12px',
            }}
            >
              Back
            </span>
          </Button>
        )}

        <div className="intro  mb-3 w-full ">
          <h4 className="text-2xl font-bold text-white mt-3 font-body">Authentication Type</h4>
          <h6 className="text-[#99a1ac] text-sm font-body">Select one method to proceed</h6>
        </div>
        <Formik>
          <Form onSubmit={formik.handleSubmit}>
            <div className="inputs">
              <div className="flex flex-row items-center w-full">
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
                    <MailOutlineRoundedIcon variant="outlined" sx={{ color: 'white' }} />
                    {/* <img src={e.icon} alt="email" style={{ alignSelf: 'center' }} /> */}
                  </Box>
                  <InputBase
                    name="email"
                    readOnly
                    autoComplete="off"
                    className="bg-[#283046] w-full rounded-lg autofill:bg-transparent"
                    sx={{ height: '100%', input: { fontSize: '14px', color: 'white' } }}
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                    onBlur={formik.handleBlur}
                    defaultValue={formik.values.email}
                    placeholder="Fill the Email address"
                  />
                </Paper>

                <div className="mb-1" style={{ fontSize: 12 }}>
                    &nbsp;
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : null}
                </div>

              </div>
              <div className="mt-6">
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
    </div>
  );
}

export default AuthenticationType;
