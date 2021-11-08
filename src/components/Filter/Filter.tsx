import React from 'react';

import s from './Filter.module.scss';

import searchIcon from '../../assets/icons/search.svg';
import pinIcon from '../../assets/icons/pin.svg';
import hopperIcon from '../../assets/icons/hopper.svg';


interface FilterProps {
  nameSearch: string;
  locationSearch: string;
  timeWorkingCheck: boolean;
  setNameSearch: React.Dispatch<React.SetStateAction<string>>;
  setLocationSearch: React.Dispatch<React.SetStateAction<string>>;
  setTimeWorkingCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter: React.FC<FilterProps> = (
  {
    locationSearch,
    setTimeWorkingCheck,
    timeWorkingCheck,
    nameSearch,
    setLocationSearch,
    setNameSearch,
  }) => {
  return (
    <div className={s.filter}>
      <div className={s.container}>
        <div className={s.filter__inputs}>
          <div className={s.filter__company}>
            <img className={s.filter__icon} src={searchIcon} alt="filter company by name" />
            <input
              className={s.filter__company__input}
              type="text"
              value={nameSearch}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNameSearch(e.target.value)}
              placeholder="Filter by title, companies, expertise…"
            />
          </div>
          <div className={s.filter__location}>
            <img className={s.filter__icon} src={pinIcon} alt="filter company by name" />
            <input
              className={s.filter__location__input}
              type="text"
              value={locationSearch}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocationSearch(e.target.value)}
              placeholder="Filter by location…"
            />
          </div>
          <div className={s.filter__time}>
            <input
              className={s.filter__time__input}
              type="checkbox"
              checked={timeWorkingCheck}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTimeWorkingCheck(e.target.checked)}
            />
            <label className={s.filter__time__label}>
              Full Time Only
            </label>
          </div>
          <div className={s.filter__company__group}>
            <img src={hopperIcon} alt="filter group" />
          </div>
          <div className={s.filter__submit}>
            <button className={s.filter__submit__button}>
              <span className={s.filter__submit__text}>Search</span>
              <img className={s.filter__submit__icon} src={searchIcon} alt="filter company by name" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
