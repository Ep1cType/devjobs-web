import {CompanyAction, CompanyActionEnum, CompanyState} from "./types";

const initialState: CompanyState = {
  companyList: [],
  isLoading: false,
  isError: "",
  perPage: 12,
  currentPage: 1,
  filteredCompanyList: [],
}

export default function companyReducer(state = initialState, action: CompanyAction): CompanyState {
  debugger;
  switch (action.type) {
    case CompanyActionEnum.SET_COMPANY_LIST: {
      debugger;
      return {
        ...state,
        companyList: action.payload,
        filteredCompanyList: action.payload
      };
    }
    case CompanyActionEnum.SET_IS_LOADING: {
      debugger
      return {
        ...state,
        isLoading: action.payload
      }
    }
    case CompanyActionEnum.SET_IS_ERROR: {
      return {
        ...state,
        isError: action.payload
      }
    }
    case CompanyActionEnum.SET_PAGE: {
      return {
        ...state,
        perPage: action.payload
      }
    }
    case CompanyActionEnum.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.payload
      }
    }
    case CompanyActionEnum.FIND_COMPANY: {
      debugger;
      const searchValue = {
        searchByName: action.payload.nameSearch.toLowerCase().trim(),
        searchByLocation: action.payload.locationSearch.toLowerCase().trim(),
        searchByTimeWorking: action.payload.timeWorkingCheck
      }
      // if (searchValue) {
      return {
        ...state,
        filteredCompanyList: state.companyList.filter((company) =>
          company.company.toLowerCase().includes(searchValue.searchByName)
          && company.country.toLowerCase().includes(searchValue.searchByLocation)
        )
      }
      // }
      // return {
      //   ...state,
      //   filteredCompanyList: state.companyList
      // }
    }
    default:
      return state;
  }
}
