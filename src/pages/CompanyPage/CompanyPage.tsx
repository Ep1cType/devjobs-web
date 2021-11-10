import React from 'react';

import s from './CompanyPage.module.scss';
import {useParams} from "react-router-dom";

const CompanyPage = () => {

  const {id} = useParams()

  return (
    <div>
      Company number {id}
    </div>
  );
};

export default CompanyPage;
