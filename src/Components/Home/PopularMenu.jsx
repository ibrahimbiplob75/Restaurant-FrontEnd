import { useEffect, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import MenuItem from "../Shared/MenuItem";


const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section className="mb-12 text-center">
      <SectionTitle
        subTitle="From Our Menu"
        title="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10 w-4/5 mx-auto">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="btn text-center btn-outline border-0 border-b-4 mt-4">
        View Full Menu
      </button>
    </section>
  );
};

export default PopularMenu;
