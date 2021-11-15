import {ICompany} from "../../../types/ICompany";

export interface CompanyState {
  companyList: ICompany[];
  isLoading: boolean;
  isError: string;
  perPage: number;
  currentPage: number;
  filteredCompanyList: ICompany[];
}

export enum CompanyActionEnum {
  SET_COMPANY_LIST = "SET_COMPANY_LIST",
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_IS_ERROR = "SET_IS_ERROR",
  SET_PAGE = "SET_PAGE",
  SET_CURRENT_PAGE = "SET_CURRENT_PAGE",
  FIND_COMPANY = "FIND_COMPANY",
}

export interface SetCompanyListAction {
  type: CompanyActionEnum.SET_COMPANY_LIST;
  payload: ICompany[];
}

export interface SetIsLoadingAction {
  type: CompanyActionEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface SetIsErrorAction {
  type: CompanyActionEnum.SET_IS_ERROR;
  payload: string;
}

export interface SetPageAction {
  type: CompanyActionEnum.SET_PAGE;
  payload: number;
}

export interface SetCurrentPageAction {
  type: CompanyActionEnum.SET_CURRENT_PAGE;
  payload: number;
}

export interface FindCompanyAction {
  type: CompanyActionEnum.FIND_COMPANY;
  payload: {
    nameSearch: string,
    locationSearch: string,
    timeWorkingCheck: boolean,
  }
}

export type CompanyAction =
  SetCompanyListAction | SetIsLoadingAction | SetIsErrorAction | SetPageAction | SetCurrentPageAction | FindCompanyAction
