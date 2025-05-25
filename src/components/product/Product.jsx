import React from "react";
import { useNavigate } from "react-router-dom";

const Products = ({data}) => {
   const navigate = useNavigate()
  return (
    <div className="container mx-auto grid grid-cols-5 gap-3">
      {data?.map((item) => (
        <div key={item.id}>
          <img onClick={()=> navigate(`/product/${item.id}`)} src={item.thumbnail} alt="" />
          <h3 className="text-xl line-clamp-1" title={item.title}>
            {item.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Products;
