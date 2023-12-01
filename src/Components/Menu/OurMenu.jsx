import React from 'react';
import CoverSection from '../Shared/CoverSection';


import main_Img from "../../assets/menu/banner3.jpg";
import desert_img from "../../assets/menu/dessert-bg.jpeg"

import SectionTitle from '../Shared/SectionTitle';
import DataEffect from '../DataEffect/DataEffect';
import MenuItem from '../Shared/MenuItem';
import { Link } from 'react-router-dom';
const OurMenu = () => {
    const [menu,loading]=DataEffect();
    const offered = menu.filter((item) => item.category === "offered");
    const desserts = menu.filter((item) => item.category === "dessert");
    return (
      <section>
        {/* main div */}
        <div>
          <CoverSection
            bg_img={main_Img}
            title={"OUR MENU"}
            subTitle={"Would you like to try a dish?"}
          ></CoverSection>
        </div>

        {/* Today's Offer */}
        <div className="text-center mb-10 mt-10">
          <SectionTitle
            title={"TODAY'S OFFER"}
            subTitle={"---Don't miss---"}
          ></SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-10 w-4/5 mx-auto">
            {offered.map((offer) => (
              <MenuItem loading={loading} key={offer._id} item={offer}></MenuItem>
            ))}
          </div>
          <button className="btn text-center btn-outline border-0 border-b-4 mt-4">
            order your favourite food
          </button>
        </div>

        {/* desert Item */}
        <div className="text-center mb-10 mt-10">
          <div className="m-10">
            <CoverSection
              bg_img={desert_img}
              title={"DESSERTS"}
              subTitle={
                "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            ></CoverSection>
          </div>

          <div className="grid md:grid-cols-2 gap-10 w-4/5 mx-auto">
            {desserts.map((dessert) => (
              <MenuItem
                key={dessert._id}
                item={dessert}
                
              ></MenuItem>
            ))}
          </div>
          <Link to={`/shop/dessert`}>
            <button className="btn text-center btn-outline border-0 border-b-4 mt-4">
              order your favourite food
            </button>
          </Link>
        </div>
      </section>
    );
};

export default OurMenu;