/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import {
  Autocomplete,
  Box,
  Button, FormControl, InputBase,
  MenuItem, Paper, Select,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useFormik, Form, Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';
import * as Yup from 'yup';
import { fillForm, signUpUser, updateUserAtSignup } from '../../../redux/slices/RegisterationSlice';
import { getCountryCode } from '../../../redux/slices/CountrySlice';
import ModalWindow from '../../../components/Modal/ModalWindow';
import CountryList from '../../../utility/countriesWithFlag';
import { CssTextField } from './muiComponents';

function AuthenticationType({ backButtonClicked, formData, setFormData }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  const [centeredModal, setCenteredModal] = useState(false);
  const handleClose = () => setCenteredModal(false);
  const handleOpenModal = () => setCenteredModal(true);
  const registerationUserDetails = useSelector(
    (state) => state.registeration.userDetails,
  );
  const [message, setMessage] = useState('');
  const country = useSelector((state) => state.country);
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const initialValues = {
    ...registerationFormDetails,
    ...formData,
    phoneNumber: registerationFormDetails?.phoneNumber?.replace(selectedCode, ''),
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
        ...registerationUserDetails.userEmail && { approved: true },
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
            auth0Id: registerationUserDetails.data?.auth0_id,
            userId: registerationUserDetails.data?._id,
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

  useEffect(() => {
    if (
      registerationUserDetails.error
      || registerationUserDetails.data.valid
      || registerationUserDetails.message
    ) {
      if (
        registerationUserDetails.message
        || registerationUserDetails.data?.message
      ) {
        setCenteredModal(true);
        setMessage(registerationUserDetails.message.error);
      }
    }

    if (registerationUserDetails.data?.access_token) {
      navigate('/resilence', { replace: true });
    }
  }, [registerationUserDetails.loading]);
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

    const countryItems = CountryList.map((countryElement) => {
      const data = {
        label: countryElement?.callingCode,
        value: countryElement?.callingCode,
        flag: countryElement?.flag,
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
    if (registerationFormDetails.resetForm) {
      formik.resetForm();
    }
  }, [registerationFormDetails]);

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
                Object.keys(registerationUserDetails.data).length !== 0
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
                  <MenuItem sx={{ color: '#283046', backgroundColor: '#596067' }} value="email">
                    <MailOutlineRoundedIcon variant="outlined" size="small" sx={{ color: '#99a1ac' }} />
                    Email

                  </MenuItem>

                  <MenuItem sx={{ backgroundColor: '#596067' }} value="phone_number">
                    <LocalPhoneIcon variant="outlined" size="small" sx={{ color: '#99a1ac' }} />
                    Phone Number

                  </MenuItem>
                </Select>
                <div className="mb-1" style={{ fontSize: 12 }}>
                  {/* &nbsp;
                  {formik.touched.authType && formik.errors.authType
                    ? formik.errors.authType
                    : null} */}
                </div>
              </div>
              <div className="w-full mt-6">
                { emailField ? (
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
                          handleEmailBlock();
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
                ) : null}
                {phoneField ? (
                  <>
                    <div className="flex flex-row items-center w-full">

                      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <Autocomplete
                          className=" bg-[#283046] input-group-text rounded-xl !border-2 !border-[#656669]"
                          id="country-select-demo"
                          disableClearable
                          sx={{ height: '46px', input: { color: 'white' }, borderColor: '' }}
                          options={item}
                          onChange={(e, value) => {
                            formik.setFieldValue('industryType', value.label, true);
                            formik.handleBlur(value.label);
                          }}
                          autoHighlight
                          getOptionLabel={(option) => option.label}
                          renderOption={(props, option) => (
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                              <img
                                loading="lazy"
                                width="20"
                                src={option.flag}
                                // srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                alt="flag"
                              />
                              {option.label}
                              {/* (
                              {option.code}
                              ) +
                              {option.phone} */}
                            </Box>
                          )}
                          renderInput={(params) => (
                            <CssTextField
                              value={params.value}
                              // eslint-disable-next-line react/jsx-props-no-spreading
                              {...params}
                              placeholder="Code"
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                              }}
                            />
                          )}
                        />
                      </FormControl>
                      <div className="w-full">
                        <Paper
                          className="w-full !rounded-md "
                          sx={{
                            border: 1,
                            display: 'flex',
                            alignItems: 'center',
                            height: '46px',
                            borderColor: '#656669',
                            backgroundColor: '#283046',
                          }}
                        >
                          <InputBase
                            name="phoneNumber"
                            autoComplete="off"
                            className="bg-[#283046] w-full rounded-lg autofill:bg-transparent"
                            sx={{ height: '100%', input: { fontSize: '14px', color: 'white' } }}
                            onChange={(e) => {
                              handlePhoneBlock();
                              formik.handleChange(e);
                            }}
                            onBlur={formik.handleBlur}
                            value={formik.values.phoneNumber}
                            placeholder="Enter your phone number"
                          />
                        </Paper>

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
                  className="btn p-2 py-3 h-12 !text-xs "
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
        <ModalWindow
          open={centeredModal}
          message={message}
          handleClose={handleClose}
          handleOpen={handleOpenModal}
        />
      </div>
    </div>
  );
}

export default AuthenticationType;
