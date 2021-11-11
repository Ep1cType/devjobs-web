import React from 'react';

import s from "./PageHeader.module.scss";

const PageHeader = () => {
  return (
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
  );
};

export default PageHeader;
