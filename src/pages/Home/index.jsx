import React from 'react';
import logo from '../../assets/images/logo/logo.png';
import pattern from '../../assets/images/pattern-right.png';
import patternBottom from '../../assets/images/pattern-bottom.png';
// import { Card, CardContent } from "@mui/material";

function Home() {
  return (
    <div className="h-screen p-0 m-0 bg-theme-black">
      <div className="h-full md:flex ">
        <div className="leftSection w-full bg-[#1a1d1f]" />

        <div className="rightSection  w-full relative">
          <div className="md:flex  ">
            <div className="pl-9 pt-10 pr-0" md={6}>
              <img src={logo} />
            </div>
            <div md={6} className="absolute top-0 right-0">
              <img src={pattern} />
            </div>
          </div>
          <div className="absolute bottom-0 right-0 left-1/2 transform  sm: ">
            <img src={patternBottom} className="" />
          </div>

          {/* <div className="smartForm">
            <Card className="p-0 m-0"></Card>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
