import { useLoaderData } from "react-router-dom";
import SectionTitle from "../Shared/SectionTitle";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import AxiosPublic from "../../AxiosPublic/AxiosPublic";
import UseAxiosSecure from "../../AxiosSecure/UseAxiosSecure";


const imgApi = import.meta.env.VITE_IMGBB_API_KEY;
const hostApi = `https://api.imgbb.com/1/upload?key=${imgApi}`;

const UpdateItem = () => {
    const {_id,name,category,price,recipe,image}=useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const [axiosPublic] = AxiosPublic();
    const [axiosSecure] = UseAxiosSecure();

    const onSubmit = async (data) => {
      const imgFile = { image: data.image[0] };
      const res = await axiosPublic.post(hostApi, imgFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      if (res.data.success) {
        const menuItem = {
          name: data.name,
          category: data.category,
          price: parseFloat(data.price),
          recipe: data.recipe,
          image: res.data.data.display_url,
        };
        const result = await axiosSecure.patch(`/menu/${_id}`, menuItem).then((res) => {
          if (res.data.modifiedCount>0) {
            reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: `${data.name} updated the product`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    };
     return (
       <div className="w-full px-10">
         <SectionTitle subTitle="Any wrong ?" title="Update an item"></SectionTitle>
         <form onSubmit={handleSubmit(onSubmit)}>
           <div className="form-control w-full mb-4">
             <label className="label">
               <span className="label-text font-semibold">Recipe Name*</span>
             </label>
             <input
               type="text"
               defaultValue={name}
               placeholder="Recipe Name"
               {...register("name", { required: true, maxLength: 120 })}
               className="input input-bordered w-full "
             />
           </div>
           <div className="flex my-4">
             <div className="form-control w-full ">
               <label className="label">
                 <span className="label-text">Category*</span>
               </label>
               <select
                 defaultValue={category}
                 {...register("category", { required: true })}
                 className="select select-bordered"
               >
                 <option disabled>Pick One</option>
                 <option>pizza</option>
                 <option>soup</option>
                 <option>salad</option>
                 <option>dessert</option>
                 <option>desi</option>
                 <option>drinks</option>
               </select>
             </div>
             <div className="form-control w-full ml-4">
               <label className="label">
                 <span className="label-text font-semibold">Price*</span>
               </label>
               <input
                 type="number"
                 defaultValue={price}
                 {...register("price", { required: true })}
                 placeholder="Type here"
                 className="input input-bordered w-full "
               />
             </div>
           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Recipe Details</span>
             </label>
             <textarea
               {...register("recipe", { required: true })}
               className="textarea textarea-bordered h-24"
               defaultValue={recipe}
               placeholder="Bio"
             ></textarea>
           </div>
           <div className="form-control w-full my-4">
             <label className="label">
               <span className="label-text">Item Image*</span>
             </label>
             <input
               type="file"
               
               {...register("image",{required:true})}
               className="file-input file-input-bordered w-full "
             />
           </div>
           <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
         </form>
       </div>
     );
};

export default UpdateItem;