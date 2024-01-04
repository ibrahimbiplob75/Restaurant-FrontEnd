import axios from "axios";
import { useContext } from "react";
import { AuthProvider } from "../ContextProvider/ContextProvider";
import { useNavigate } from "react-router-dom";

const secureAxios = axios.create({
  baseURL: "http://localhost:5000",
});

const UseAxiosSecure = () => {
  const {LogOut}=useContext(AuthProvider);
  const navigate=useNavigate();

    secureAxios.interceptors.request.use(function(config){
      const token = localStorage.getItem("Access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    }, function (error) {
      return Promise.reject(error);
    });

    secureAxios.interceptors.response.use(
      function (response) {
        return response;
      },
      async(error)=>{
        const status=error.response.status;
        if(status===401 || status===403){
          await LogOut();
          navigate("/login")
        }
        return Promise.reject(error);
      }
    );


    return [secureAxios];
};

export default UseAxiosSecure;