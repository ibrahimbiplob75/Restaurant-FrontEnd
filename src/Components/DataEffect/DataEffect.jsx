import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import AxiosPublic from "../../AxiosPublic/AxiosPublic";


const DataEffect = () => {
    const [axiosPublic]=AxiosPublic();
    // const [menu,setMenu]=useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(()=>{
    //     fetch("https://restuarent-server.vercel.app/menu",{credentials:"include"})
    //       .then((res) => res.json())
    //       .then((data) => setMenu(data));
    //       setLoading(false);
    // },[]);

    const {data:menu=[],isLoading,refetch}=useQuery({
        queryKey:["menu"],
        queryFn:async()=>{
            const res=await axiosPublic.get("/menu");
            return res.data;
        }
    })


    return [menu, isLoading,refetch];
};

export default DataEffect;