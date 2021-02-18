import React from 'react';

import SideBar from '../components/Sidebar';
import FavoriteList from '../components/FavoriteList';

import { Grid } from './styles';

const Layout: React.FC = () => {
  return (
    <>
      <Grid>
        <SideBar />
        <FavoriteList />
      </Grid>
    </>
  );
}

export default Layout;