import superagentePromise from "superagent-promise";
import _superagent, { ResponseError, Request, Response } from "superagent";

const superagent = superagentePromise(_superagent, global.Promise);
const URL = "https://655cf25525b76d9884fe3153.mockapi.io/v1/";
const ADD = "https://644060ba792fe886a88de1b9.mockapi.io/v1/";

interface BodyResponse {}

const handleError = (err: ResponseError, onAuthError: () => void) => {
  if (err?.status === 401) {
    onAuthError();
  }
  if (err?.response?.body?.statusCode !== 200) {
    return err?.response?.body;
  }
};

const responseBody = (res: Response): BodyResponse => {
  return res.body as BodyResponse;
};

const requests = {
  get: (url: string) =>
    superagent.get(`${URL}${url}`).then(responseBody).catch(handleError),
  post: (url: string, body: any) =>
    superagent.post(`${URL}${url}`, body).then(responseBody).catch(handleError),
  put: (url: string, body: any) =>
    superagent.put(`${URL}${url}`, body).then(responseBody).catch(handleError),
  del: (url: string) =>
    superagent.del(`${URL}${url}`).then(responseBody).catch(handleError),
};

const PartnerRoute = {
  getPartner: () => requests.get(`external-companies`),
  postPartner: (partners: string) =>
    requests.post(`external-companies`, partners),
  deletePartner: (partnerId: string) =>
    requests.del(`external-companies/${partnerId}`),
};

const apiCall = {
  PartnerRoute,
};

export default apiCall;
