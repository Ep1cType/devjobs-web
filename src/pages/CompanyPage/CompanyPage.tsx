import React from 'react';
import {useParams} from "react-router-dom";

import s from './CompanyPage.module.scss';

const CompanyPage = () => {

  const {id} = useParams()

  return (
    <>
      <div className={s.companyHeader}>
        <div className={s.container}>
          <div className={s.companyHeader__content}>
            <div className={s.company__avatar}>
              <img className={s.company__avatar__img} src="https://i.ibb.co/p2tbsDF/3.png" alt="test" />
            </div>
            <div className={s.company__menu}>
              <div className={s.company__menu__desc}>
                <h3 className={s.company__name}>Scoot</h3>
                <span className={s.company__site}>scoot.com</span>
              </div>
              <div className={s.company__menu__nav}>
                <button className={s.company__button}>
                  Company Site
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.companyInfo}>
        <div className={s.container}>
          <div className={s.companyInfo__content}>
            <div className={s.companyInfo__header}>
              <div className={s.companyInfo__desc}>
                <div className={s.companyInfo__time}>

                </div>
                <div className={s.companyInfo__vocation}>

                </div>
                <div className={s.companyInfo__location}>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div>
        Hello, you are on {id} page
      </div>

    </>
  );
};

export default CompanyPage;
