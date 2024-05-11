import { makeObservable, observable, runInAction } from "mobx";
import apiCall from "../../config/apiCall";

export interface Partner {
  [key: string]: any;
}

export class RegisterPartnerStore {
  registerPartner: Partner | null = null;
  isLoading = false;
  isError = undefined;

  constructor() {
    makeObservable(this, {
      registerPartner: observable,
      isLoading: observable,
      isError: observable,
    });
  }

  async postRegisterPartner(partners: any) {
    this.isLoading = true;
    this.isError = undefined;

    try {
      const response: any = await apiCall.PartnerRoute.postPartner(partners);
      runInAction(() => {
        this.registerPartner = JSON.parse(JSON.stringify(response));
      });
      return JSON.parse(JSON.stringify(this.registerPartner));
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

export default new RegisterPartnerStore();
