import CarouselSlider from "./CarouselSlider";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Recomend from "./Recomend";
import Swipper from "./Swipper";
import Testimonials from "./Testimonials"
import bg_img from "../../assets/home/banner.jpg"




const Home = () => {
    return (
      <div>
        <CarouselSlider></CarouselSlider>
        <Swipper></Swipper>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:`URL(${bg_img})`
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content rounded-lg shadow-xl text-black bg-white w-1/2 h-1/2 text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Know more....</button>
            </div>
          </div>
        </div>
        <PopularMenu></PopularMenu>
        <div className="text-center bg-black w-3/4 h-40 m-auto justify-center">
          <div className="pt-6">
            <h3 className="text-white mt-8 text-5xl text-center">
              Call Us: +880 1571286724
            </h3>
          </div>
        </div>
        <Recomend></Recomend>
        <Featured></Featured>
        <Testimonials></Testimonials>
      </div>
    );
};

export default Home;