import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import SectionTitle from "../Shared/SectionTitle";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";


const Swipper = () => {
  return (
    <section>
      <SectionTitle subTitle={"Ibrahim"} title={"Biplob"}>

      </SectionTitle>
      <Swiper
        slidesPerView={6}
        spaceBetween={3}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mt-12 mb-12"
      >
        <SwiperSlide>
          <img src={img3}></img>
          <h3 className="text-4xl text-center -mt-20">Soup</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1}></img>
          <h3 className="text-4xl text-center -mt-20">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2}></img>
          <h3 className="text-4xl text-center -mt-20">Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3}></img>
          <h3 className="text-4xl text-center -mt-20">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4}></img>
          <h3 className="text-4xl text-center -mt-20">Deseart</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5}></img>
          <h3 className="text-4xl text-center -mt-20">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1}></img>
          <h3 className="text-4xl text-center -mt-20">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2}></img>
          <h3 className="text-4xl text-center -mt-20">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3}></img>
          <h3 className="text-4xl text-center -mt-20">Salad</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Swipper;
