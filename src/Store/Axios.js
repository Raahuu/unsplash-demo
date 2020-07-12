import Axios from "axios";

const instance = Axios.create({
  baseURL: `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_API_KEY}`,
});

export default instance;
