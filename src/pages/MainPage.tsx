import React, {useEffect, useState} from 'react';


import Filter from '../components/Filter/Filter';
import s from './MainPage.module.scss';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import CompanyList from "../components/CompanyList/CompanyList";
import Loader from "../components/Loader/Loader";
import {createBrowserHistory} from "history";

const MainPage: React.FC = () => {
  const {fetchCompanyList} = useActions()

  const history = createBrowserHistory()




  const {companyList, isLoading, page, isError} = useTypedSelector(state => state.company);

  const [nameSearch, setNameSearch] = useState<string>('');
  const [locationSearch, setLocationSearch] = useState<string>('');
  const [timeWorkingCheck, setTimeWorkingCheck] = useState<boolean>(false);

  useEffect(() => {
    fetchCompanyList();
  }, [nameSearch])

  return (
    <>
      <Filter
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
              <CompanyList companyList={companyList}/>
              <div className={s.pagination}>
                <button className={s.pagination__button}>
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
