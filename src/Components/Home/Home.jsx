import CarouselSlider from "./CarouselSlider";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Swipper from "./Swipper";






const Home = () => {
    return (
        <div>
            <CarouselSlider></CarouselSlider>
            <Swipper></Swipper>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            {/* <Testimonials></Testimonials> */}
            
        </div>
    );
};

export default Home;