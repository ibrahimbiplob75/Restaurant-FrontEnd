import React from 'react';

const CoverSection = ({bg_img,title,subTitle}) => {
    return (
      <div
        className="hero h-[750px]"
        style={{
          backgroundImage: `URL(${bg_img})`,
        }}
      >
        <div className="hero-overlay "></div>
        <div className="hero-content rounded-lg shadow-xl text-white bg-opacity-30 bg-black w-1/2 h-1/2 text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5 text-2xl">{subTitle}</p>
          </div>
        </div>
      </div>
    );
};

export default CoverSection;