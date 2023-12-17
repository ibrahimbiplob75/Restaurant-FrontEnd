import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthProvider } from '../../ContextProvider/ContextProvider';
import Swal from 'sweetalert2';


const Login = () => {
    
   
    const { signIn } = useContext(AuthProvider);
    
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    
    const handleValidatecaptcha = (event) => {
      const loginButton = document.querySelector(".capt_btn");
     
      const user_captcha_value = event.target.value;
      if (validateCaptcha(user_captcha_value)) {
         loginButton.classList.remove("hidden");
      
      } else {
          loginButton.classList.add("hidden");
      }
    };

    const handleLogin = (event) => {
     event.preventDefault();
     const data = event.target;
     const email = data.email.value;
     const password = data.password.value;
     signIn(email, password)
       .then(() => {
         Swal.fire({
           position: "center",
           icon: "success",
           title: "You have Logged In successfully",
           showConfirmButton: false,
           timer: 1500,
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
    };
   
    return (
      <>
        <Helmet>
          <title>Bistro Boss | Login</title>
        </Helmet>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col md:flex-row-reverse">
            <div className="text-center md:w-1/2 lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    name="captcha"
                    onBlur={handleValidatecaptcha}
                    placeholder="Type the captcha above"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary capt_btn hidden"
                    type="submit"
                    value="Login"
                    
                  />
                </div>
              </form>
              <p>
                <small>
                  New Here? <Link to="/signup">Create an account</Link>{" "}
                </small>
              </p>
              {/* <SocialLogin></SocialLogin> */}
            </div>
          </div>
        </div>
      </>
    );
};

export default Login;


