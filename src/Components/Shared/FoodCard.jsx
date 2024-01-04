import React, { useContext } from 'react';
import { AuthProvider } from '../../ContextProvider/ContextProvider';
import Swal from 'sweetalert2';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import UseCart from '../../UseCart/UseCart';
import UseAxiosSecure from '../../AxiosSecure/UseAxiosSecure';
import AxiosPublic from '../../AxiosPublic/AxiosPublic';


const FoodCard = ({ item }) => {
     const { name, image, price, recipe, _id } = item;
     const {user}=useContext(AuthProvider);
     const navigate = useNavigate();
     const location = useLocation();
     const [,refetch]=UseCart();
     const [axiosPublic]=AxiosPublic()

     const from = location.state?.from?.pathname || "/";

     const handleAddToCart= item=>{
         if(user && user.email){
         
          axiosPublic
            .post("/carts", {
              menuId: _id,
              email: user.email,
              name: name,
              img: image,
              price: price,
            })
            .then(function (response) {
              if (response.data.insertedId) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: `${name} added to the cart`,
                  showConfirmButton: false,
                  timer: 1500,
                });
                refetch();
              }
            })
            .catch(function (error) {
              console.log(error);
            });;
         }
         else{
           Swal.fire({
             title: "You have to Login",
             text: "Do you want to Login?",
             icon: "warning",
             showCancelButton: true,
             confirmButtonColor: "#3085d6",
             cancelButtonColor: "#d33",
             confirmButtonText: "Yes, Go!",
           }).then((result) => {
             if (result.isConfirmed) {
               navigate("/login", { state:{form:location }});
             }
           });
         }
     }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;