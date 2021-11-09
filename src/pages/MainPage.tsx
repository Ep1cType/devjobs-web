import React, {useEffect, useState} from 'react';
import CompanyCard from '../components/CompanyList/CompanyCard/CompanyCard';
import Filter from '../components/Filter/Filter';

import s from './MainPage.module.scss';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import CompanyList from "../components/CompanyList/CompanyList";


import Layout from "../layouts/Layout";

const MainPage: React.FC = () => {
  const {fetchCompanyList} = useActions()


  const {companyList, isLoading, page, isError} = useTypedSelector(state => state.company);

  const [nameSearch, setNameSearch] = useState<string>('');
  const [locationSearch, setLocationSearch] = useState<string>('');
  const [timeWorkingCheck, setTimeWorkingCheck] = useState<boolean>(false);

  useEffect(() => {
    fetchCompanyList()
  }, [])

  return (
    // <div className={s.app}>
      <>
        <Filter
          locationSearch={locationSearch}
          nameSearch={nameSearch}
          setLocationSearch={setLocationSearch}
          setTimeWorkingCheck={setTimeWorkingCheck}
          timeWorkingCheck={timeWorkingCheck}
          setNameSearch={setNameSearch}
        />
        {isLoading && <h2>LOADING</h2>}
        <div className={s.mainSection}>
          <div className={s.container}>
            <CompanyList companyList={companyList} />
            <div className={s.pagination}>
              <button className={s.pagination__button}>
                Load More
              </button>
            </div>
          </div>
        </div>
      </>


    // </div>
  );
};

export default MainPage;
