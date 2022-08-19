import React from 'react';
import { Outlet } from 'react-router';
import { Divider } from '@mui/material';
import MenuTabs from './components/MenuTabs';
import logo from '../../assets/images/logo/logo.png';
import NotificationDropdown from './components/NotificationDropdown';

function Header() {
  return (
    <div className="flex bg-theme-black w-screen h-screen transition ease-in pt-2">
      <div className="w-full h-16">
        <div className="flex h-full justify-between pl-5 items-center">
          <div>
            <img className="grow-0" src={logo} alt="logo" />
          </div>
          <MenuTabs />
          <NotificationDropdown />
        </div>
        <Divider className="mt-3 !border-gray-700" />
        <Outlet />
      </div>
    </div>
  );
}

export default Header;
