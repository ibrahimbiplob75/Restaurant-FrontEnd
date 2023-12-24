
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";


const SocialLogin = () => {
  

  return (
    <div>
      <h2>Or sign in with</h2>
      <div className="divider"></div>
      <div className="flex flex-col-3">
        <div className="w-full text-center my-2">
          <button
            //   onClick={handleGoogleSignIn}
            className="btn btn-circle btn-outline"
          >
            <FaGoogle></FaGoogle>
          </button>
        </div>
        <div className="w-full text-center my-2">
          <button
            //   onClick={handleGoogleSignIn}
            className="btn btn-circle btn-outline"
          >
            <FaFacebook></FaFacebook>
          </button>
        </div>
        <div className="w-full text-center my-2">
          <button
            //   onClick={handleGoogleSignIn}
            className="btn btn-circle btn-outline"
          >
            <FaGithub></FaGithub>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
