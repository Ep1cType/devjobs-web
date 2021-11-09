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
          <CompanyCard key={company.id} id={company.id} icon={company.iconURL} time={company.publish_date} vocation={company.vocation}
                       company={company.company} location={company.country}/>
        ))
        :
        <>Не найдено</>
      }
    </ul>
  );
};

export default CompanyList;
