import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvider } from "../../ContextProvider/ContextProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import logImg from  "../../assets/others/authentication2.png";
import SocialLogin from "../Shared/SocialLogin";
import AxiosPublic from "../../AxiosPublic/AxiosPublic";

const SignUp = () => {
   const {
     register,
     reset,
     handleSubmit,
     formState: { errors },
   } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthProvider);
   const navigate = useNavigate();
   const [publicAxios]=AxiosPublic();
  const onSubmit = (data) => {
 
    // console.log(data);
    createUser(data.email,data.password)
    .then(() => {
        
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
              photo: data.photoURL,
              role:"User"
            };
            publicAxios.post("/users", userInfo).then((res) => {
              // console.log(res)
              if (res.data.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully.",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              footer: '<a href="#">Why do I have this issue?</a>',
            });
          });
      
      

    });
  }
  const backgroundImageUrl = "https://i.ibb.co/SQLKxz7/authentication.png"; // Replace with the actual image path

  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
 
  };
  return (
    <>
      <Helmet>
        <title>Restaurant | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen" style={containerStyle}>
        <div
          className="hero-content flex-col lg:flex-row shadow-2xl rounded-xl w-2/3"
          style={containerStyle}
        >
          <div>
            <img src={logImg} alt="" />
          </div>
          <div className="text-center ">
            <h1 className="text-5xl font-bold m-5">Sign up now!</h1>

            <div className="card flex-shrink-0 w-full max-w shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-600">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    {...register("photoURL", { required: true })}
                    placeholder="Photo URL"
                    name="photoURL"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-red-600">Photo URL is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-600">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-600">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-600">
                      Password must be less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-600">
                      Password must have one Uppercase one lower case, one
                      number and one special character.
                    </p>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn bg-[#D1A054] border-none text-white btn-secondary"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
              <p className="text-center mb-4">
                <small className="text-[#D1A054]">
                  Already have an account?<Link to="/login">Login</Link>
                </small>
              </p>
               <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
