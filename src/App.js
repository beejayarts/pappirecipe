import "./App.css";
import { useState, useEffect } from "react";
import RecipeCard from "./components/RecipeCard";

const apiUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [renderRecipes, setRenderRecipes] = useState([]);
  const [activeBtn, setactiveBtn] = useState('breakfast');

  // console.log("recipeslice", recipes.slice(2,6));
 const handleClick = (start,end,activeSetter)=>{
    let newArray = recipes.slice(start,end)
    setRenderRecipes(newArray)
    setactiveBtn(activeSetter)
 }
  

  const fetchrecipe = async () => {
    setIsLoading(true);
    let response = await fetch(apiUrl);
    let data = await response.json();
    // console.log(data);
    setRecipes(data.categories);
    setRenderRecipes(data.categories.slice(0,5))
    setIsLoading(false);

    //  console.log(res)
  };

  // console.log("recipes", recipes);

  useEffect(() => {
    fetchrecipe();
  }, []);

  return (
    <div className="App">
      <div className="container my-10 max-w-5xl h-screen mx-auto">
        <header>
          <h1 className="text-5xl font-medium font-[poppins] text-blue-400">
            Menu
          </h1>
          <div className="categories font-[poppins] font-medium flex gap-8 justify-center mt-9">
            <button onClick={()=>handleClick(0,5,'breakfast')} className={`${activeBtn==='breakfast'? 'text-blue-400':'text-pink-700' }  :    hover:text-blue-400 duration-300`}>
              Breakfast
            </button>
            <button onClick={()=>handleClick(5,8,'lunch')} className={`${activeBtn==='lunch'? 'text-blue-400':'text-pink-700' }  :    hover:text-blue-400 duration-300`}>
              Lunch
            </button>
            <button onClick={()=>handleClick(8,14,'dinner')} className={`${activeBtn==='dinner'? 'text-blue-400':'text-pink-700' }  :    hover:text-blue-400 duration-300`}>
              Dinner
            </button>
          </div>
        </header>
        <div className="recipes mt-14 grid grid-cols-2">
          {renderRecipes.length > 0 &&
            renderRecipes.map((recipe) => <RecipeCard key={recipe.idCategory} recipe={recipe} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
