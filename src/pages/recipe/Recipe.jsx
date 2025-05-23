import React, { useEffect, useState } from "react";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-pink-600">Recipes</h1>
      {recipes.length === 0 ? (
        <p className="text-gray-500 text-center">No recipes found</p> 
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((rec) => (
          <div
            key={rec.id}
            className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 overflow-hidden"
          >
            <img
              src={rec.image}
              alt={rec.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {rec.name}
              </h3>
              <p className="text-gray-500 text-sm">{rec.cuisine}</p>
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default Recipe;
