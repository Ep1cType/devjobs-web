import React from 'react';

import {useNavigate} from 'react-router-dom'

import s from './CompanyCard.module.scss';
import {ICompany} from "../../../types/ICompany";

const CompanyCard: React.FC<ICompany> = (
  {
    company,
    country,
    iconURL,
    publish_date,
    time,
    vocation,
    id
  }) => {

  const navigate = useNavigate()

  return (
    <li className={s.companyCard} >
      <div className={s.companyCard__avatar}>
        <img
          onClick={() => navigate(`${id}`, {})}
          className={s.companyCard__avatar__img}
          src={iconURL}
          alt="company_avatar"
        />
      </div>
      <div className={s.companyCard__info}>
        <div className={s.companyCard__time}>
          {publish_date} . {time}
        </div>
        <div className={s.companyCard__vocation}>
          <h3 className={s.companyCard__vocation__title}>{vocation}</h3>
        </div>
        <div className={s.companyCard__company}>
          {company}
        </div>
      </div>
      <div className={s.companyCard__location}>
        {country}
      </div>
    </li>
  );
};

export default CompanyCard;
