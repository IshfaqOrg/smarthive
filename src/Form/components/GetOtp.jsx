import { Button, MenuItem, Select, Typography } from '@mui/material';
import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const GetOtp = () => { return (
    <React.Fragment>
        <div className='font-body'>
            <Button 
            variant="contained"
            sx={{
                borderRadius:'8px',
                padding:'5px',
                "&:hover": {backgroundColor:"#596067"},
                backgroundColor:"#596067", 
                width:'',
            }}>
               <ChevronLeftIcon  sx={{fontSize:'12px'}}/> <span style={{
                fontColor:'#eaf5ff',
                fontSize:'12px',}}>Back</span>
            </Button>

            <div className="intro  mb-3  ">
        <h4 className="text-2xl font-bold text-white mt-3 font-body">Authentication Type</h4>
        <h6 className="text-[#99a1ac] text-sm font-body">Select one method to proceed</h6>
      </div>
            <div className='inputs w-3/4'>
            <Select
                  className="w-full bg-[#283046] input-group-text"
                  id="outlined-basic"
                  variant="outlined"
                  name="industryType"
                  labelId="Select your industry type"
                //   onChange={formik.handleChange}
                //   onBlur={formik.handleBlur}
                //   value={formik.values.industryType}
                // value={} // data
                  size="small"
                  sx={{ input: { color: 'white', },backgroundColor: '#283046' ,borderRadius: '10px' }}
                >
                  <MenuItem sx={{ color:'#283046', backgroundColor: '#596067' }} value="email">Email</MenuItem>
                  <MenuItem sx={{ backgroundColor: '#596067' }} value="phoneNumber">Phone Number</MenuItem>

                </Select>
                
            </div>
        </div>
    </React.Fragment>
  )
}

export default GetOtp;
