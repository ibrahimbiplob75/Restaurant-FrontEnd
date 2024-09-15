import { Swiper, SwiperSlide } from "swiper/react";
// Import required modules
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
    <section className="py-12 bg-gray-50">
      {/* Enhanced Section Title */}
      <SectionTitle subTitle={"Discover"} title={"Our Specialties"} />

      {/* Swiper Container */}
      <Swiper
        slidesPerView={3} // Default for mobile
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // Responsive breakpoints
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mt-12 mb-12"
      >
        {/* Slides */}
        {[
          { img: img1, label: "Salad" },
          { img: img2, label: "Pizza" },
          { img: img3, label: "Soup" },
          { img: img4, label: "Dessert" },
          { img: img5, label: "Salad" },
        ].map((item, index) => (
          <SwiperSlide key={index} className="relative group">
            {/* Image */}
            <img
              src={item.img}
              alt={item.label}
              className="w-full h-auto max-w-xs object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105 mx-auto"
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-3xl text-white font-bold">{item.label}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Swipper;
