import React from 'react';
import { Outlet } from 'react-router-dom';

import SideMenu from '../components/menu/SideMenu';

const MainLayout: React.FC = () => {
  return (
    <div className='main-layout'>
      <SideMenu />
      <Outlet />
    </div>
  );
};

export default MainLayout;
