import React from 'react';
import {Routes, Route} from 'react-router-dom'

import MainPage from "./pages/MainPage";
import Layout from "./layouts/Layout";
import CompanyPage from './pages/CompanyPage/CompanyPage';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path=":id" element={<CompanyPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
