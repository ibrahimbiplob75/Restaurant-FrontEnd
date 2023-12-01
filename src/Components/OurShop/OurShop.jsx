import CoverSection from "../Shared/CoverSection";
import shop_img from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import DataEffect from "../DataEffect/DataEffect";
import { useParams } from "react-router-dom";
import { useState } from "react";
import OrderTap from "./OrderTap";

const OurShop = () => {
    const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
    const { category } = useParams();
    
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = DataEffect();

    const desserts = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const drinks = menu.filter((item) => item.category === "drinks");

    return (
      <section>
        <div>
          <CoverSection
            bg_img={shop_img}
            title={"OUR SHOP"}
            subTitle={"Would you like to try a dish"}
          ></CoverSection>
        </div>

        <Tabs
          className="text-center m-10"
          defaultIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
        >
          <TabList className="uppercase">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTap className="border-none" items={salad}></OrderTap>
          </TabPanel>
          <TabPanel>
            <OrderTap items={pizza}></OrderTap>
          </TabPanel>
          <TabPanel>
            <OrderTap items={soup}></OrderTap>
          </TabPanel>
          <TabPanel>
            <OrderTap items={desserts}></OrderTap>
          </TabPanel>
          <TabPanel>
            <OrderTap items={drinks}></OrderTap>
          </TabPanel>
        </Tabs>
      </section>
    );
};

export default OurShop;