import React from 'react';

import {Outlet} from 'react-router-dom'

import s from './Layout.module.scss';
import PageHeader from "../components/PageHeader/PageHeader";

const Layout = () => {
  return (
    <div className={s.layout}>
      <PageHeader />

      <Outlet />

    </div>
  );
};

export default Layout;
