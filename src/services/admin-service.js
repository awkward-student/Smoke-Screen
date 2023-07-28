import { Axios } from "./helper";

export const getAllSubmissions = () => {
  return Axios.get("v1/api/adm/auth/submissions").then((res) => {
    return res.data;
  });
};

export const getSubmissionByUser = (userId) => {
  return Axios.get("v1/api/adm/auth/submission/user/" + userId).then((res) => {
    return res.data;
  });
};
