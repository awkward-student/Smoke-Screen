import { PRIVATE_AXIOS } from "./helper";

export const SubmitSolution = (solutions, userId) => {
  console.log(solutions);
  console.log(userId);
  return PRIVATE_AXIOS.post(
    "v1/api/user/" + userId + "/submission",
    solutions
  ).then((res) => res.data);
};
