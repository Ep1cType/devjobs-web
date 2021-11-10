import React, {useEffect} from 'react';

import s from './CompanyPage.module.scss'

import {useParams} from "react-router-dom";

const CompanyPage = () => {

  const {id} = useParams()

  return (
    <div style={{marginTop: "200px"}}>
      Hello, you are on {id} page
    </div>
  );
};

export default CompanyPage;