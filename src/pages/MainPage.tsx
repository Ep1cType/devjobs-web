import React, {useEffect, useState} from 'react';

import s from './MainPage.module.scss';

import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

import Filter from '../components/Filter/Filter';
import CompanyList from "../components/CompanyList/CompanyList";
import Loader from "../components/Loader/Loader";

const MainPage: React.FC = () => {
  const {fetchCompanyList, setCurrentPage} = useActions();

  const {companyList, isLoading, perPage, isError, currentPage} = useTypedSelector(state => state.company);

  const [nameSearch, setNameSearch] = useState<string>('');
  const [locationSearch, setLocationSearch] = useState<string>('');
  const [timeWorkingCheck, setTimeWorkingCheck] = useState<boolean>(false);

  const lastIndex = currentPage * perPage;
  const CompanySlicedList = companyList.slice(0, lastIndex);

  useEffect(() => {
    if (!companyList.length) {
      fetchCompanyList();
    }
  }, [])

  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  }

  return (
    <>
      <Filter
        // isVisibleModal={isVisibleModal}
        // setIsVisibleModal={setIsVisibleModal}
        locationSearch={locationSearch}
        nameSearch={nameSearch}
        setLocationSearch={setLocationSearch}
        setTimeWorkingCheck={setTimeWorkingCheck}
        timeWorkingCheck={timeWorkingCheck}
        setNameSearch={setNameSearch}
      />
      <div className={s.mainSection}>
        <div className={s.container}>
          {isLoading
            ?
            <Loader/>
            :
            <>
              <CompanyList companyList={CompanySlicedList}/>
              <div className={s.pagination}>
                <button onClick={() => loadMore()} className={s.pagination__button}>
                  Load More
                </button>
              </div>
            </>
          }
        </div>
      </div>
    </>
  );
};

export default MainPage;
