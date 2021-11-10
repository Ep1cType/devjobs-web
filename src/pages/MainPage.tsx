import React, {useEffect, useState} from 'react';
import CompanyCard from '../components/CompanyList/CompanyCard/CompanyCard';
import Filter from '../components/Filter/Filter';

import s from './MainPage.module.scss';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const MainPage: React.FC = () => {
  const {fetchCompanyList} = useActions()

  const {companyList, isLoading} = useTypedSelector(state => state.company);

  const [nameSearch, setNameSearch] = useState<string>('');
  const [locationSearch, setLocationSearch] = useState<string>('');
  const [timeWorkingCheck, setTimeWorkingCheck] = useState<boolean>(false);

  useEffect(() => {
    fetchCompanyList()
  }, [])

  return (
    <div className={s.app}>
      <div className={s.pageHeader}>
        <div className={s.pageHeader__triangle1}/>
        <div className={s.pageHeader__triangle2}/>
        <div className={s.pageHeader__triangle3}/>
        <div className={s.container}>
          <div className={s.pageHeader__menu}>
            <div className={s.pageHeader__logo}>
              <h1 className={s.pageHeader__logo__title}>devjobs</h1>
            </div>
            <div className={s.toggle}>

            </div>
          </div>
        </div>
      </div>
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
          <ul className={s.companyList}>
            {companyList
              ?
              companyList.map((company: any) => (
                <CompanyCard icon={company.iconURL} time={company.publish_date} vocation={company.vocation}
                             company={company.company} location={company.country}/>
              ))
              :
              <>Не найдено</>
            }
          </ul>
          <div className={s.pagination}>
            <button className={s.pagination__button}>
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
