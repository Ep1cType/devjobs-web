import React from 'react';
import './App.css';
import MainPage from "./pages/MainPage";

import {Routes, Route, Location} from 'react-router-dom'
import Layout from "./layouts/Layout";
import CompanyPage from './pages/CompanyPage/CompanyPage';


const App = (): JSX.Element => {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<MainPage />}/>
        <Route path=":id" element={<CompanyPage/>} />
      </Route>
    </Routes>
  );
}

export default App;
