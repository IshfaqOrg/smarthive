/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import {
  Avatar, Box, Button, Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { useDispatch, useSelector } from 'react-redux';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Form, Formik, useFormik } from 'formik';
import ImageUploading from 'react-images-uploading';
import InputText from '../../../components/inputs/InputText';
import profileIcon from '../../../assets/images/icons/Profile.png';
import emailIcon from '../../../assets/images/icons/Message.png';
import companyIcon from '../../../assets/images/icons/Globe.png';
import InputPhone from '../../../components/inputs/InputPhone';
import { getUserInfo, uploadProfileImage } from '../../../redux/slices/userSlice';

const inputData = [{
  icon: profileIcon,
  alt: 'profile picture',
  name: 'full_name',
  placeholder: 'Your full name...',
  key: 'input 1',
}, {
  icon: emailIcon,
  alt: 'Email',
  name: 'email',
  placeholder: 'Your Email...',
  key: 'input 2',
}];

function AccountOverView() {
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const maxNumber = 1;
  const userDetails = useSelector((state) => state.user.userInfo);
  const initialValues = {
    role: '',
    full_name: '',
    email: '',
    phone_number: '',
    company: {
      company_name: '',
      company_domain: '',
    },
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  useEffect(() => {
    if (!userDetails.length) {
      dispatch(getUserInfo());
    }
  }, [userDetails]);

  useEffect(() => {
    if (userDetails) {
      setImages([{ data_url: userDetails.profile_image }]);
      formik.setValues(userDetails);
    }
  }, [userDetails]);

  const imageOnChange = (imageList, addUpdateIndex) => {
    console.log('imageList', imageList);
    // data for submit
    setImages(imageList);
    const data = new FormData();
    data.append('image', imageList[0].file);
    dispatch(uploadProfileImage(data));
  };
  return (
    <Box className="space-y-6 mt-12">
      <Box className="flex space-x-6">
        {userDetails?.profile_image ? <Avatar src={userDetails?.profile_image} alt="profile avatar" sx={{ width: '35px', height: '35px ' }} />
          : (
            <Avatar
              // onClick={() => onImageUpdate(index)}
              sx={{
                background: '#272b30',
                width: 100,
                height: 100,

                borderWidth: 3,
                borderColor: '#404656',
                borderStyle: 'dashed',
              }}
            >
              <InsertPhotoIcon alt="profile avatar" sx={{ color: '#878f99' }} variant="outlined" />
            </Avatar>
          )}
        <Box className="flex flex-col justify-center space-y-3">
          <ImageUploading
            multiple={false}
            value={images}
            onChange={imageOnChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              onImageUpload,
              onImageUpdate,

            }) => (
              <Button
                disableRipple
                variant="contained"
                component="label"
                // eslint-disable-next-line no-unused-expressions
                onClick={(e) => { images.length > 0 ? onImageUpdate(e) : onImageUpload(e); }}
                sx={{
                  borderRadius: '8px',
                  padding: '11px',
                  '&:hover': { backgroundColor: '#272b30' },
                  backgroundColor: '#272b30',
                }}

              >
                <FileUploadIcon sx={{ color: '#99a1ac', fontSize: '20px' }} />
                <span style={{
                  fontSize: '12px',
                }}
                >
                  Upload Image
                </span>
              </Button>
            )}

          </ImageUploading>
          <Typography variant="h6" className="text-[#99a1ac] !font-thin !text-xs font-body">
            Max size upto 10MB

          </Typography>
        </Box>
      </Box>
      <Formik>
        <Form onSubmit={formik.handleSubmit}>
          <Box className="grid grid-cols-2 space-x-6">
            {
          inputData.map(((e) => (
            <Box key={e.key} sx={{ mb: 2, width: '100%' }}>
              <InputText
                icon={e.icon}
                alt={e.alt}
                disabled
                name={e.name}
                placeholder={e.placeholder}
                values={formik.values[e.name]}
              />

            </Box>
          )))
        }
          </Box>
          <Box className="grid grid-cols-2 space-x-6">
            <InputPhone />
            <InputText
              icon={companyIcon}
              alt="Company Name"
              disabled
              values={formik.values.company?.company_name}
              name="companyName"
              placeholder="Your company..."
            />
          </Box>
        </Form>
      </Formik>
    </Box>
  );
}

export default AccountOverView;
