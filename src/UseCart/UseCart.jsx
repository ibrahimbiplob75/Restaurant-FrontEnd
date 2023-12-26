import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../AxiosSecure/UseAxiosSecure";
import { useContext } from "react";
import { AuthProvider } from "../ContextProvider/ContextProvider";


const UseCart = () => {
    const AxiosSecure=UseAxiosSecure();
    const {user}=useContext(AuthProvider);
    
    const { refetch,data: cart = [] } = useQuery({
      queryKey: ["cart", user?.email],
      queryFn: async () => {
        const res = await AxiosSecure.get(`/carts?email=${user.email}`);
        return res.data;
      },
    });
    return [cart, refetch];
};

export default UseCart;