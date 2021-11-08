import axios, {AxiosResponse} from "axios";
import {ICompany} from "../types/ICompany";

export default class CompanyService {
  static async getCompanyList(): Promise<AxiosResponse<ICompany[]>> {
    return axios.get<ICompany[]>('./data.json');
  }
}
