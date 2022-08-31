import React, { useEffect, useState } from 'react';
import {
  Autocomplete, Box, InputBase, Paper,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getCountryCode } from '../../redux/slices/CountrySlice';
import { CssTextField } from './muiComponents';
import CountryList from '../../utility/countriesWithFlag';

function InputPhone({

  handleChange, handleBlur, values,
}) {
  const country = useSelector((state) => state.country);
  const [selectedCode, setSelectedCode] = useState('');
  const dispatch = useDispatch();
  const [userCountry, setUserCountry] = useState();
  const flagField = (e) => setSelectedCode(e.target.value);
  const [item, setItems] = useState();

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

  return (
    <div className="flex flex-row space-x-3">
      {' '}
      <Autocomplete
        className=" bg-[#283046] input-group-text rounded-xl !border-2 !border-[#656669]"
        id="country-select-demo"
        disableClearable
        sx={{ height: '46px', input: { color: 'white' }, borderColor: '' }}
        options={item}
        // onChange={(e, value) => {
        //   formik.setFieldValue('industryType', value.label, true);
        //   formik.handleBlur(value.label);
        // }}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
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
            placeholder="+01"
            inputProps={{
              ...params.inputProps,
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
          />
        )}
      />
      <div className="flex flex-row w-full">
        <Paper
          className="w-full !rounded-md"
          sx={{
            border: 1,
            display: 'flex',
            alignItems: 'center',
            height: '46px',
            borderColor: '#656669',
            backgroundColor: '#283046',
            '&:hover': {
              borderColor: 'orange',
            },
          }}
        >
          <InputBase
            name="phoneNumber"
            autoComplete="off"
            className="bg-[#283046] w-full rounded-lg autofill:bg-transparent"
            sx={{ height: '100%', input: { fontSize: '14px', color: 'white' } }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values}
            placeholder="Enter your phone number"
          />
        </Paper>

      </div>
    </div>
  );
}

export default InputPhone;
