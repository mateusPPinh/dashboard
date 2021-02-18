import React from 'react';

import SideBar from '../components/Sidebar';
import FavoriteList from '../components/FavoriteList';
import DashboardOptions from '../components/DashboardOptions';

import { Grid } from './styles';

const Layout: React.FC = () => {
  return (
    <>
      <Grid>
        <SideBar />
        <FavoriteList />
        <DashboardOptions />
      </Grid>
    </>
  );
};

export default Layout;
