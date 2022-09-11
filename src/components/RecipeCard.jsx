import React from "react";
import food from "../assets/food.jpg";

const RecipeCard = ({recipe}) => {
    const {strCategory,strCategoryThumb,strCategoryDescription} = recipe
    let shortDesc = `${strCategoryDescription.slice(0,100)} ...`
  return (
    <div className="recipecard text-left bg-gray-100 p-6 m-4">
      <div className="container flex gap-4 w-[500px]    ">
        <img src={strCategoryThumb} alt="food" className="w-36 object-cover" />
        <div className="details ">
          <div className="flex items-center justify-between gap-40 ">
            <h3 className="recipe_title text-2xl font-bold text-pink-700 font-[rockwell]">{strCategory}</h3>
            <p className="price font-[poppins] text-gray-400">$5.0</p>
          </div>
          <p className="recipe_desc font-[poppins] text-gray-700 text-sm mt-4 w-48 max-w-sm">{shortDesc}</p>
          
          
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
