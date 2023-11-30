import React, { useEffect, useState } from 'react';
import SectionTitle from '../Shared/SectionTitle';
import FoodCard from '../Shared/FoodCard';

const Recomend = () => {
    const [items,setItems]=useState([]);
    useEffect(()=>{
        fetch("menu.json")
        .then(res=>res.json())
        .then(res=> setItems(res))
    },[])
    return (
      <section>
        <SectionTitle
          subTitle="---Should Try---"
          title={"CHEF RECOMMENDS"}
        ></SectionTitle>
        <div className='grid grid-cols-4 gap-4'>
          {items.slice(0, 4).map((item) => (
            <FoodCard key={item._id} item={item}></FoodCard>
          ))}
        </div>
      </section>
    );
};

export default Recomend;