import {
  Autocomplete,
  Box,
  Button, FormControl, InputAdornment, InputBase, ListItemIcon,
  ListItemText, MenuItem, Select, TextField,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useFormik, Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { LoadingButton } from '@mui/lab';
import * as Yup from 'yup';
import { fillForm, signUpUser, updateUserAtSignup } from '../../../redux/slices/RegistrationSlice';
import { getCountryCode } from '../../../redux/slices/CountrySlice';
import CountryList from '../../../utility/countriesWithFlag';
import Modal from '../../Modal/Modal';

function AuthenticationType({ backButtonClicked, formData, setFormData }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCode, setSelectedCode] = useState('');
  const registrationFormDetails = useSelector((state) => state.registration?.form);
  const [selectedValue, setSelectValue] = useState('email');
  const [emailField, setEmailField] = useState(true);
  const [phoneField, setPhoneField] = useState(false);
  const [userCountry, setUserCountry] = useState();
  const [item, setItems] = useState();
  const [resetForm, setResetForm] = useState(false);
  const [open, setOpen] = useState(false);
  const registrationUserDetails = useSelector(
    (state) => state.registration.userDetails,
  );
  const country = useSelector((state) => state.country);
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const initialValues = {
    ...registrationFormDetails,
    ...formData,
    phoneNumber: registrationFormDetails?.phoneNumber?.replace(selectedCode, ''),
  };
  const validationSchema = selectedValue === 'phone_number'
    ? Yup.object({
      phoneNumber: Yup.string()
        .required('Mobile number is required')
        .matches(phoneRegExp, 'Mobile number is not valid')
        .min(10, 'Mobile number is not valid')
        .max(10, 'Mobile number is not valid'),
    })
    : Yup.object({
      email: Yup.string().required('Email is mandatory'),
      // .matches(emailRegExp, "Email is not valid !"),
    });
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      let data = {
        ...values,
        ...registrationUserDetails.userEmail && { apporved: true },
      };
      if (data.authType) {
        data.authType = selectedValue?.toLowerCase();

        if (selectedValue === 'phone_number') {
          data.phoneNumber = `${selectedCode}${data.phoneNumber}`;
        }
      }
      if (!data.phoneNumber) {
        delete data.phoneNumber;
      }
      dispatch(fillForm(data));

      setIsLoading(true);
      try {
        if (false) { // edit this
          data = {
            ...data,
            auth0Id: registrationUserDetails.data?.auth0_id,
            userId: registrationUserDetails.data?._id,
          };
          console.log('Calling APi');
          await dispatch(updateUserAtSignup(data));
        } else await dispatch(signUpUser(data));
        if (selectedValue !== 'phone_number') {
          setResetForm(true);
        }
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    },
  });
  //   },
  // });
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
  const handleOpen = () => {
    setOpen(!open);
  };
  // getting country data

  useEffect(() => {
    if (!country.data) dispatch(getCountryCode);

    const countryItems = CountryList.map((item) => {
      const data = {
        label: item?.callingCode,
        value: item?.callingCode,
        flag: item?.flag,
      };
      return data;
    });

    const userCount = countryItems.filter(
      (element) => element.value === country?.data?.country_calling_code,
    );
    setUserCountry(userCount);
    setItems(countryItems);
    if (userCount[0] && userCount[0]?.value) {
      setSelectedCode(userCount[0]?.value);
    }
  }, [country.data]);
  const flagField = (e) => setSelectedCode(e.target.value);

  useEffect(() => {
    if (registrationFormDetails.resetForm) {
      formik.resetForm();
    }
  }, [registrationFormDetails]);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 120,
      },
    },
  };
  return (
    <div className="font-body">
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
      {open && <Modal open={open} handleOpen={open} />}

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
                <MenuItem sx={{ backgroundColor: '#596067' }} value="phone_number">Phone Number</MenuItem>
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
              {phoneField ? (
                <>
                  <div className="flex flex-row items-center w-full">

                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">

                      <Autocomplete
                        className="w-full bg-[#283046] input-group-text"
                        options={item}
                        renderInput={(params) => (
                          <div ref={params.InputProps.ref}>
                            <InputBase
                              inputProps={{ className: 'w-full' }}
                              // eslint-disable-next-line react/jsx-props-no-spreading
                              {...params.inputProps}
                              name="industryType"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              value={params.value}
                              placeholder="+01"
                              startAdornment={params.flag}
                            />
                            {' '}

                          </div>
                        )}
                      />

                      <Select
                        className="w-full bg-[#283046] input-group-text"
                        id="outlined-basic"
                        variant="outlined"
                        onChange={flagField}
                        placeholder="+01"
                        value={selectedCode}
                        labelId="Select your industry type"
                        size="small"
                        sx={{
                          padding: '5px',
                          color: '#99a1ac',
                          fontSize: '13px',
                          backgroundColor: '#283046',
                          borderRadius: '18px',
                        }}
                        onBlur={formik.handleBlur}
                        autoComplete="off"
                        MenuProps={MenuProps}
                      >
                        {item.map((element, index) => (
                          <MenuItem value={element.value} key={`${element.value + index}`} sx={{ fontSize: '12px', backgroundColor: '#99a1ac' }}>
                            <ListItemIcon size="small"><img src={element.flag} alt="country flag" /></ListItemIcon>
                            <ListItemText>{element.label}</ListItemText>
                          </MenuItem>
                        ))}

                      </Select>

                    </FormControl>
                    <div className="w-full">
                      <TextField
                        name="phoneNumber"
                        variant="outlined"
                        autoComplete="off"
                        value={formik.values.phoneNumber}
                        onChange={(e) => {
                          handlePhoneBlock();
                          formik.handleChange(e);
                        }}
                        onBlur={formik.handleBlur}
                        placeholder="Enter your phone number"
                        size="small"
                        sx={{
                          backgroundColor: '#283046',
                          borderRadius: '8px',
                          width: '100%',
                          input: {
                            color: 'white', padding: '13px', color: '#99a1ac', fontSize: '13px',
                          },
                        }}
                      />
                    </div>

                  </div>
                  <div className="mb-1" style={{ fontSize: 12 }}>
                  &nbsp;
                    {formik.touched.phoneNumber && formik.errors.phoneNumber
                      ? formik.errors.phoneNumber
                      : null}
                  </div>
                </>

              ) : null}
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
  );
}

export default AuthenticationType;
