import React from 'react';

import s from "./CompanyList.module.scss";

import CompanyCard from "./CompanyCard/CompanyCard";
import {ICompany} from "../../types/ICompany";

interface CompanyListProps {
  companyList: ICompany[]
}

const CompanyList: React.FC<CompanyListProps> = ({companyList}) => {
  return (
    <ul className={s.companyList}>
      {companyList
        ?
        companyList.map((company: any) => (
          <CompanyCard key={company.id}
                       id={company.id}
                       publish_date={company.publish_date}
                       iconURL={company.iconURL}
                       time={company.time}
                       vocation={company.vocation}
                       company={company.company}
                       country={company.country}
          />
        ))
        :
        <>Не найдено</>}
    </ul>
  );
};

export default CompanyList;
