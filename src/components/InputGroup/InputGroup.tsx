import React from 'react';

import s from '../Filter/Filter.module.scss';

import pinIcon from "../../assets/icons/pin.svg";

interface FilterGroupProps {
  locationSearch: string;
  timeWorkingCheck: boolean;
  setLocationSearch: React.Dispatch<React.SetStateAction<string>>;
  setTimeWorkingCheck: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputGroup: React.FC<FilterGroupProps> = ({locationSearch, setLocationSearch, timeWorkingCheck, setTimeWorkingCheck}) => {
  return (
    <>
      <div className={s.filter__location}>
        <img className={s.filter__icon} src={pinIcon} alt="filter company by name"/>
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
    </>
  );
};

export default InputGroup;
