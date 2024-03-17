import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import PropTypes from 'prop-types';

const Recipes = ({handleCook}) => {
  const [recipes,setRecipes] = useState([]);
  useEffect(() =>{
    fetch('/recipes.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  },[])

    return (
      
        <div className="lg:w-2/3 grid lg:grid-cols-2 grid-cols-1 p-3 gap-4">
           

            {
              recipes.map(recipe => 
              <Recipe key={recipe.recipe_id}
               recipe={recipe}
               handleCook ={handleCook}
               >
              </Recipe>)
            }
        </div>
    );
};
Recipes.propTypes = 
{
  handleCook: PropTypes.func
}
export default Recipes;