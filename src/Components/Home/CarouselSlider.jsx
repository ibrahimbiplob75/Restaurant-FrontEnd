import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import slider1 from "../../assets/home/1.png"
import slider2 from "../../assets/home/2.png";
import slider3 from "../../assets/home/3.png"
import slider4 from "../../assets/home/4.png";
import slider5 from "../../assets/home/5.png";
import slider6 from "../../assets/home/6.png";

const CarouselSlider = () => {
  return (
    <Carousel >
      <div>
        <img src={slider1} />
      </div>
      <div>
        <img src={slider2} />
      </div>
      <div>
        <img src={slider3} />
      </div>
      <div>
        <img src={slider4} />
      </div>
      <div>
        <img src={slider5} />
      </div>
      <div>
        <img src={slider6} />
      </div>
    </Carousel>
  );
};

export default CarouselSlider;
