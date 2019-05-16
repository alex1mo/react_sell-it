import axios from "axios";

const request = (method, path, obj = {}) => {
  return axios({
    baseURL: `http://light-it-04.tk/api/`,
    method,
    url: path,
    data: obj
  });
};

export const getRequest = path => request("GET", path);

export const postRequest = (path, data) => request("POST", path, data);
