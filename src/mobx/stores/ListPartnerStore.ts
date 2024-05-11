import { makeObservable, observable, runInAction } from "mobx";
import apiCall from "../../config/apiCall";

export interface Partner {
  [key: string]: any;
}

export class ListPartnerStore {
  listPartner: Partner | null = null;
  isLoading = false;
  isError = undefined;

  constructor() {
    makeObservable(this, {
      listPartner: observable,
      isLoading: observable,
      isError: observable,
    });
  }

  async setListPartner() {
    this.isLoading = true;
    this.isError = undefined;

    try {
      const response: any = await apiCall.PartnerRoute.getPartner();
      runInAction(() => {
        this.listPartner = JSON.parse(JSON.stringify(response));
      });
      return JSON.parse(JSON.stringify(this.listPartner));
    } catch (err) {
      console.error(err);
      throw err;
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  }
}

export default new ListPartnerStore();
