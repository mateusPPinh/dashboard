import React from 'react';

import SideBar from '../components/Sidebar';
import FavoriteList from '../components/FavoriteList';
import DashboardOptions from '../components/DashboardOptions';

import { Grid } from './styles';

interface Props {
  toggleTheme(): void;
}

const Layout: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <>
      <Grid>
        <SideBar />
        <FavoriteList />
        <DashboardOptions toggleTheme={toggleTheme} />
      </Grid>
    </>
  );
};

export default Layout;
