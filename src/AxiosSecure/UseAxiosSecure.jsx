import axios from "axios";

const secureAxios = axios.create({
  baseURL: "http://localhost:5000",
});

const UseAxiosSecure = () => {
    return [secureAxios];
};

export default UseAxiosSecure;