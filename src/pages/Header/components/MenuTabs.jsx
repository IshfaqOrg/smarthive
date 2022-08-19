import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuTabs() {
  const navItems = [{
    to: '/dashboard',
    label: 'Dashboard',
  }, {
    to: '/hive',
    label: 'Hive',
  }, {
    to: '/resilence',
    label: 'Resilence',
  }, {
    to: '/privilageAccess',
    label: 'Privilage Accesss',
  }, {
    to: '/compliance',
    label: 'Compliance',
  }];
  //   const activeClassName = '';
  return (
    <div className="menu-tabs">
      <nav className="flex gap-11 ">
        {navItems.map(((element) => (
          <NavLink key={`${element.label}`} to={element.to}><h6 className=" nav-item text-[#99a1ac]  text-sm font-body">{element.label}</h6></NavLink>
        )))}

      </nav>
    </div>
  );
}

export default MenuTabs;
