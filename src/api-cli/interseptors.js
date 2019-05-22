import axios from "axios";

export default (store, history) => {
  axios.interceptors.response.use(
    function(response) {
      return response;
    },
    function(error) {
      switch (error.response.status.toString()) {
        case "401":
          console.log("401");
          break;
        case "404":
          console.log("404");
          break;
        default:
          history.push("/");
          console.log({ error });
      }
      return Promise.reject(error);
    }
  );
};
