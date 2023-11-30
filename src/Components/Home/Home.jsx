import CarouselSlider from "./CarouselSlider";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Recomend from "./Recomend";
import Swipper from "./Swipper";
import Testimonials from "./Testimonials"





const Home = () => {
    return (
      <div>
        <CarouselSlider></CarouselSlider>
        <Swipper></Swipper>
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