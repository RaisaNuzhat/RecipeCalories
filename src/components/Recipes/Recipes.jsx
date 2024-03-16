import { useEffect, useState } from "react";

const Recipes = () => {
  const [recipes,setRecipes] = useState([]);
  useEffect(() =>{
    fetch('/recipes.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  },[])

    return (
        <div className="lg:w-2/3 grid lg:grid-cols-2 grid-cols-1">
            <h1 className="text-3xl">Recipes :{recipes.length}</h1>

            
        </div>
    );
};

export default Recipes;