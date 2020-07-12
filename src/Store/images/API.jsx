import Axios from "../Axios";

export const getImagesAPI = (payload) => {
  return new Promise((resolve, reject) => {
    return Axios.get("")
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
