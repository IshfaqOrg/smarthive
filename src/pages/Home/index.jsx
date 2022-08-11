import React from 'react';
import logo from '../../assets/images/logo/logo.png';
import pattern from '../../assets/images/pattern-right.png';
import patternBottom from '../../assets/images/pattern-bottom.png';
import Form from '../../Form/components/Form';

function Home() {
  return (
    <div className="h-screen p-0 m-0 bg-theme-black">
      <div className="h-full md:flex ">
        <div className="leftSection w-full bg-[#1a1d1f]" />
        <div className="rightSection  w-full h-full relative">
          <div className="md:flex  ">
            <div className="pl-9 pt-10 pr-0 absolute" md={6}>
              <img src={logo} alt="logo" />
            </div>
            <div md={6} className="absolute top-0 right-0">
              <img alt="pattern" src={pattern} />
            </div>
          </div>

          <div className="pattern-bottom absolute bottom-0 inset-x-0  transform -translate-x-25 ">
            <img className="pattern-bottom " alt="patter-bottom" src={patternBottom} />
          </div>
          <div className="h-full flex justify-center items-center smartForm">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
