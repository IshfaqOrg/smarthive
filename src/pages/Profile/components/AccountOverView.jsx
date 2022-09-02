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
import { FiImage } from 'react-icons/fi';
import { HiOutlineUpload } from 'react-icons/hi';
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
    <Box className="space-y-12 mt-8">
      <Box className="flex space-x-6">
        {userDetails?.profile_image ? <Avatar src={userDetails?.profile_image} alt="profile avatar" sx={{ width: '35px', height: '35px ' }} />
          : (
            <Avatar
              // onClick={() => onImageUpdate(index)}
              sx={{
                background: '#272b30',
                width: 100,
                height: 100,

                borderWidth: '2px',
                borderColor: 'rgb(106, 114, 125)',
                borderStyle: 'dashed',
              }}
            >
              <FiImage alt="profile avatar" style={{ color: '#878f99 ', height: '30px', width: '30px' }} variant="outlined" />
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
                  borderRadius: '5px',
                  padding: '8px 18px',
                  '&:hover': { backgroundColor: '#272b30' },
                  backgroundColor: '#272b30',
                }}

              >
                <HiOutlineUpload style={{ color: '#6A727D', fontSize: '20px' }} />
                <span
                  style={{
                    fontSize: '14px',
                    textTransform: 'none',
                  }}
                >
                  Upload Image
                </span>
              </Button>
            )}

          </ImageUploading>
          <Typography variant="h6" className="text-[#747A80] !font-thin !text-xs font-body">
            Max size upto 10MB

          </Typography>
        </Box>
      </Box>
      <div className="w-[95%]">
        {/* <div className="justify-between"> */}
        <Formik>
          <Form onSubmit={formik.handleSubmit}>
            <div className="grid grid-row-2 space-y-6">
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
            </div>
          </Form>
        </Formik>
      </div>
      {/* </div> */}
    </Box>
  );
}

export default AccountOverView;
