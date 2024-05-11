import { makeObservable, observable, runInAction } from "mobx";
import apiCall from "../../config/apiCall";

export class DeletePartnerStore {
  isLoading = false;
  isError = undefined;

  constructor() {
    makeObservable(this, {
      isLoading: observable,
      isError: observable,
    });
  }

  async delPartner(partnerId: string) {
    this.isLoading = true;
    this.isError = undefined;

    try {
      const response: any = await apiCall.PartnerRoute.deletePartner(partnerId);
      runInAction(() => {
        this.isLoading = false;
      });
      return response;
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

export default new DeletePartnerStore();
