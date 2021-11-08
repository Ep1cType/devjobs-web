import {CompanyActionEnum, SetCompanyListAction, SetIsErrorAction, SetIsLoadingAction} from "./types";
import {ICompany} from "../../../types/ICompany";
import {AppDispatch} from "../../index";
import CompanyService from "../../../services/CompanyService";

export const CompanyActionCreators = {
  setCompanyList: (companyList: ICompany[]): SetCompanyListAction => ({
    type: CompanyActionEnum.SET_COMPANY_LIST,
    payload: companyList,
  }),
  setIsLoading: (bool: boolean): SetIsLoadingAction => ({
    type: CompanyActionEnum.SET_IS_LOADING,
    payload: bool,
  }),
  setIsError: (error: string): SetIsErrorAction => ({
    type: CompanyActionEnum.SET_IS_ERROR,
    payload: error,
  }),
  fetchCompanyList: () => async (dispatch: AppDispatch) => {
    try {
      dispatch(CompanyActionCreators.setIsLoading(true))

      setTimeout(async () => {
        const response = await CompanyService.getCompanyList();
        console.log(response.data);
        dispatch(CompanyActionCreators.setIsLoading(false))
        dispatch(CompanyActionCreators.setCompanyList(response.data))
      }, 1000)

    } catch (e) {

    } finally {
    }
  }
}
