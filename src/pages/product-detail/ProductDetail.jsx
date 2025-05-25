import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../api";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    api.get(`/products/${id}`)
      .then((res) => setData(res.data))
      .catch(err => console.error("Failed to fetch product:", err));
  }, [id]);

  if (!data) return <p className="text-center py-10 text-lg font-medium text-gray-500">Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 flex items-center gap-2 cursor-pointer"
      >
        <span className="text-xl">←</span> Go back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl shadow-xl">
        <div>
          <div className="rounded-xl overflow-hidden border border-gray-200">
            <img
              src={data?.images?.[index]}
              alt={data?.title}
              className="w-full h-[400px] object-contain bg-gray-50"
            />
          </div>
          <div className="flex gap-2 mt-4 flex-wrap">
            {data?.images?.map((item, inx) => (
              <img
                key={inx}
                src={item}
                onClick={() => setIndex(inx)}
                className={`w-20 h-20 object-cover rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  index === inx ? 'border-blue-500 ring-2 ring-blue-300' : 'border-transparent'
                }`}
                alt=""
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{data?.title}</h1>
            <span className="text-xl text-yellow-500 font-semibold mb-2 block">
              Rating: ⭐ {data?.rating}
            </span>
            <p className="text-gray-700 leading-relaxed">{data?.description}</p>
          </div>

          <div className="mt-6">
            <strong className="text-4xl text-green-600 font-bold">${data?.price}</strong>
            <button className="block mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition-all duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
