import axios from "axios";

type AxiosTypes = {
  method: string;
  url: string;
  data?: any;
  params?: any;
};
const URL = 'https://netzwelt-devtest.azurewebsites.net'
const axiosRequest = ({ method = "GET", url: endpoint, ...restProps }: AxiosTypes) => {
  return axios({
    method,
    url: `${URL}${endpoint}`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    responseType: 'text',
    ...restProps,
  })
    .then(res => JSON.parse(res.data))
    .catch(err => err.response);
}

export default axiosRequest;
