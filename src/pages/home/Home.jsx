import React, { useEffect, useState } from "react";
import { api } from "../../api";
import Products from "../../components/product/Product";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    api
      .get("/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  return (
    <div className="p-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Products</h1>
        {products.length === 0 ? (
          <p className="text-center text-gray-500">No products found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 overflow-hidden cursor-pointer"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-56 object-contain bg-white p-4"
                />
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {product.description}
                  </p>
                  <span className="text-xl font-bold text-green-600">
                    ${product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
        <Products data={products} />
      </div>
    </div>
  );  
};

export default Home;
