import React, {useState} from 'react';

import s from './Filter.module.scss';

import hopperIcon from '../../assets/icons/hopper.svg';
import SearchIcon from "../../assets/icons/SearchIcon/SearchIcon";
import Modal from '../Modal/Modal';
import InputGroup from "../InputGroup/InputGroup";


interface FilterProps {
  nameSearch: string;
  locationSearch: string;
  timeWorkingCheck: boolean;
  setNameSearch: React.Dispatch<React.SetStateAction<string>>;
  setLocationSearch: React.Dispatch<React.SetStateAction<string>>;
  setTimeWorkingCheck: React.Dispatch<React.SetStateAction<boolean>>;
  // isVisibleModal: boolean;
  // setIsVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter: React.FC<FilterProps> = (
  {
    locationSearch,
    setTimeWorkingCheck,
    timeWorkingCheck,
    nameSearch,
    setLocationSearch,
    setNameSearch,
    // isVisibleModal,
    // setIsVisibleModal
  }) => {

  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);

  const openModal = () => {
    setIsVisibleModal(true);
  }

  const closeModal = () => {
    setIsVisibleModal(false);
  }

  return (
    <div className={s.filter}>
      <div className={s.container}>
        <div className={s.filter__inputs}>
          <div className={s.filter__company}>
            <SearchIcon className={s.filter__icon}/>
            <input
              className={s.filter__company__input}
              type="text"
              value={nameSearch}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNameSearch(e.target.value)}
              placeholder="Filter by title, companies, expertise…"
            />
          </div>
          <div className={s.inputGroup__container}>
            <InputGroup
              locationSearch={locationSearch}
              timeWorkingCheck={timeWorkingCheck}
              setLocationSearch={setLocationSearch}
              setTimeWorkingCheck={setTimeWorkingCheck}
            />
          </div>
          <Modal active={isVisibleModal} closeModal={closeModal} >
            <InputGroup
              locationSearch={locationSearch}
              timeWorkingCheck={timeWorkingCheck}
              setLocationSearch={setLocationSearch}
              setTimeWorkingCheck={setTimeWorkingCheck}
            />
          </Modal>
          <div className={s.filter__submit}>
            <div onClick={() => openModal()} className={s.filter__company__group}>
              <img src={hopperIcon} alt="filter group"/>
            </div>
            <button className={s.filter__submit__button}>
              <span className={s.filter__submit__text}>Search</span>
              <SearchIcon className={s.filter__submit__icon}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
