import React from 'react';

import s from './CompanyCard.module.scss';

interface CompanyCardProps {
  icon: string;
  time: string;
  vocation: string;
  company: string;
  location: string;
}

const CompanyCard: React.FC<CompanyCardProps> = (
  {
    company,
    icon,
    location,
    time,
    vocation,
  }) => {
  return (
    <li className={s.companyCard}>
      <div className={s.companyCard__avatar}>
        <img className={s.companyCard__avatar__img} src="https://i.ibb.co/tbCNhFp/1.png" alt="company_avatar"/>
      </div>
      <div className={s.companyCard__info}>
        <div className={s.companyCard__time}>
          {time}
        </div>
        <div className={s.companyCard__vocation}>
          <h3 className={s.companyCard__vocation__title}>{vocation}</h3>
        </div>
        <div className={s.companyCard__company}>
          {company}
        </div>
      </div>
      <div className={s.companyCard__location}>
        {location}
      </div>
    </li>
  );
};

export default CompanyCard;
