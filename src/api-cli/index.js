import axios from "axios";

const request = (method, path, data = {}, headers = {}) => {
  return axios({
    baseURL: `http://light-it-04.tk/api/`,
    method,
    url: path,
    data,
    headers
  });
};

export const getRequest = path => request("GET", path);

export const postRequest = (path, data, headers) =>
  request("POST", path, data, headers);
