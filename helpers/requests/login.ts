import axios from "./axios";
export const login = async (data: { username: string, password: string }) =>
  axios({
    url: "/Account/SignIn",
    method: "POST",
    data,
  });
