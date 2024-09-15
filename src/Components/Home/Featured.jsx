import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import { FaStar } from "react-icons/fa";
import "./Featured.css";

const Featured = () => {
  // Sample testimonial data
  const testimonial = {
    _id: "6430113af5a7e52ce1e8fa69",
    name: "Robert Johnson",
    details:
      "This is by far the best service I have ever used. The customer support is outstanding, and the product itself is top-notch. I couldn't be happier!",
    rating: 5,
  };

  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      {/* Section Title */}
      <SectionTitle subTitle="Customer Testimonial" title="What People Say" />

      {/* Testimonial Section */}
      <div className="md:flex justify-center items-center bg-black bg-opacity-70 pb-20 pt-12 px-6 md:px-36 rounded-lg">
        {/* Testimonial Image */}
        <div className="md:w-1/2">
          <img
            src={featuredImg}
            alt="Featured"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Testimonial Text Section */}
        <div className="md:w-1/2 md:ml-10 mt-8 md:mt-0 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">{testimonial.name}</h3>

          {/* Rating (stars) */}
          <div className="flex justify-center md:justify-start mb-4">
            {[...Array(testimonial.rating)].map((_, index) => (
              <FaStar key={index} className="text-yellow-400" />
            ))}
          </div>

          {/* Testimonial Details */}
          <p className="mt-6 text-lg leading-relaxed text-gray-300">
            {testimonial.details}
          </p>

          {/* CTA Button */}
          <button className="btn btn-outline border-0 border-b-4 border-white mt-8 px-8 py-3 text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
            Share Your Experience
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
