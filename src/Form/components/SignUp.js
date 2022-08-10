import React ,{ useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Input, InputAdornment, TextField } from "@mui/material";
import profileIcon from "../../assets/images/icons/Profile.png";
const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const registrationData = useSelector((state) => state?.registration);
  const authSelector = useSelector((state) => state.registration.authenticate);
  const userSelector = useSelector(
    (state) => state.registration.userDetails.data
  );

  const [stepper, setStepper] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const [resetForm, setResetForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [backButtonClicked, setBackButtonClicked] = useState(false);
  const ref = useRef(null);
    const emailRegExp =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const initialValues = {
    fullName: "",
    email: '',
    industry: '',
    industryType: ''
  }
const schema = Yup.object().shape({
  fullName: Yup.string().required("Your full name is required"),

  email: Yup.string()
    .required("Email is mandatory")
    .matches(emailRegExp, "Email is not valid !"),

  industry: Yup.string().required("Company name is mandatory !"),
  industryType: Yup.string().required("Industry type is mandatory !")
})

const formik = useFormik({
  initialValues,
  validationSchema:schema,
  validateOnBlur:true,
  enableReinitialize:true,
  onSubmit:values => {
    const data = {
      fullName: values.fullName,
      email: values.email,
      industry: values.industry,
      industryType: values.industryType
    }
    console.log(data);  
  }
})
  return (
    <div className='px-2'>
      <div className='intro'>
      <h4 className='text-2xl	font-bold	text-white mt-3	mb-1 font-body'>Welcome to Smart Hive</h4>
      <h6 className='text-[#99a1ac] text-sm font-body'>The best zero password system to keep our customer secure</h6>
      </div>

      <div className='formFields'>
      <form onSubmit={formik.handleSubmit}>
        <div className='signupInput'>
          
          <div>
          <TextField className="w-full input-group-text  border-4-[#d8d6de] border-solid	border p-0 bg-[#283046]" id="outlined-basic" variant="outlined" startInput
          InputProps={{startAdornment: (
            <InputAdornment position="start"  
            sx={{backgroundColor: (theme) => theme.palette.divider,
              borderTopLeftRadius: (theme) =>
              theme.shape.borderRadius + "px",
            borderBottomLeftRadius: (theme) =>
              theme.shape.borderRadius + "px"
          }} >
              <img src={profileIcon} alt="Profile Icon" />
            </InputAdornment>
          )}}
       />

          </div>
        </div>

      </form>

      </div>
    </div>
  )
}

export default SignUp
