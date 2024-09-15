import axios from "axios";

const publicAxios = axios.create({
  baseURL: "https://restuarent-server.vercel.app",
});
const AxiosPublic = () => {
    return [publicAxios];
};

export default AxiosPublic;