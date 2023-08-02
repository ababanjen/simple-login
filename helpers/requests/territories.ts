import axios from "./axios";
export const getTerritories = async () =>
  axios({
    url: "/Territories/All",
    method: "GET",
  });
