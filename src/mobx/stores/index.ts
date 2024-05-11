import listPartnerStore, { ListPartnerStore } from "./ListPartnerStore";
import registerPartnerStore, {
  RegisterPartnerStore,
} from "./RegisterPartnerStore";
import deletePartnerStore, { DeletePartnerStore } from "./DeletePartnerStore";

export type RootStore = {
  listPartnerStore: ListPartnerStore;
  registerPartnerStore: RegisterPartnerStore;
  deletePartnerStore: DeletePartnerStore;
};

const rootStore: RootStore = {
  listPartnerStore,
  registerPartnerStore,
  deletePartnerStore,
};

export default rootStore;
