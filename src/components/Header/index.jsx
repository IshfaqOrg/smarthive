import React from 'react';
import { Outlet } from 'react-router';
import { Divider } from '@mui/material';
import MenuTabs from './components/MenuTabs';
import logo from '../../assets/images/logo/logo.png';
import NotificationDropdown from './components/NotificationDropdown';
import ProfileBar from './components/ProfileBar';

function Header() {
  return (
    <div className="flex flex-col bg-theme-black w-screen h-screen transition ease-in pt-2">
      <div className="w-full h-20">
        <div className="flex h-full justify-between pl-5 items-center">
          <div>
            <img className="grow-0" src={logo} alt="logo" />
          </div>
          <MenuTabs />
          <div className="flex space-x-8 ">
            <NotificationDropdown />
            <Divider orientation="vertical" flexItem color="#404656" />
            <ProfileBar />
          </div>
        </div>
        <Divider className="mt-3 !border-gray-700" />
      </div>
      <div className="w-full mt-20">
        <div className="flex justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Header;
