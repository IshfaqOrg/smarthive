<<<<<<< Updated upstream
import React from 'react';
import logo from '../../assets/images/logo/logo.png';
import pattern from '../../assets/images/pattern-right.png';
import patternBottom from '../../assets/images/pattern-bottom.png';
// import { Card, CardContent } from "@mui/material";

function Home() {
=======
import React from "react";
import logo from "../../assets/images/logo/logo.png";
import pattern from "../../assets/images/pattern-right.png";
import patternBottom from "../../assets/images/pattern-bottom.png";
import { Card, CardContent } from "@mui/material";
<<<<<<< Updated upstream
=======
import Form from "../../Form/components/Form";
import { Outlet } from "react-router-dom";

>>>>>>> Stashed changes
const Home = () => {
>>>>>>> Stashed changes
  return (
    <div className="h-screen p-0 m-0 bg-theme-black">
      <div className="h-full md:flex ">
        <div className="leftSection w-full bg-[#1a1d1f]" />

        <div className="rightSection  w-full h-full relative">
          <div className="md:flex  ">
            <div className="pl-9 pt-10 pr-0 absolute" md={6}>
              <img src={logo} />
            </div>
            <div md={6} className="absolute top-0 right-0">
              <img src={pattern} />
            </div>
          </div>
<<<<<<< Updated upstream
          <div className="absolute bottom-0 right-0  transform  sm: ">
=======
<<<<<<< Updated upstream
          <div className="absolute bottom-0 inset-x-0  transform -translate-x-36 ">
>>>>>>> Stashed changes
            <img src={patternBottom} className="" />
          </div>

          {/* <div className="smartForm">
            <Card className="p-0 m-0"></Card>
          </div> */}
=======
          <div className="absolute bottom-0 right-0  transform   ">
            <img src={patternBottom} className="" />
          </div>

          <div className="h-full flex justify-center	items-center smartForm">
            <Form />
          </div>
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  );
}

export default Home;
