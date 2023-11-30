import React from 'react';

const CoverSection = ({bg_img,title,subTitle}) => {
    return (
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `URL(${bg_img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content rounded-lg shadow-xl text-white opacity-30 bg-black w-1/2 h-1/2 text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{subTitle}</p>
          </div>
        </div>
      </div>
    );
};

export default CoverSection;