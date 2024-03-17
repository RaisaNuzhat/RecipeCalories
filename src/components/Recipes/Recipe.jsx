import PropTypes from 'prop-types';

import { FaRegClock } from "react-icons/fa";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
const Recipe = ({recipe,handleCook}) => {
    
    const {recipe_name,recipe_image,short_description,preparing_time,calories} = recipe;
    return (
        <div className='p-3 border-solid border-2  rounded-lg border-neutral-200'>
                <div className='border-b-2 border-neutral-100 p-2'>
                <img className='mx-auto' src={recipe_image} alt={`cover picture of the  ${recipe_name}`} />
                <h2 className='text-2xl text-center font-semibold my-2'>{recipe_name}</h2>
                <p className='text-center text-[16px] text-[#878787]'>{short_description}</p>
                </div>
                <div className='border-b-2 border-neutral-100 p-2'>
                    <h3 className='text-xl font-bold'>Ingredients: {recipe.ingredients.length}</h3>
                    <ul className='list-disc p-4 text-[#878787]'>
                    {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                     ))}
                    </ul>
                   
                </div>
                <div className='border-b-2 border-neutral-100 p-2 flex justify-between items-center'>
                        <div className='flex gap-2 items-center '>
                         <FaRegClock />
                         <p className='text-[18px]'>{preparing_time} minutes</p>
                        </div>
                        <div className='flex gap-2 items-center '>
                        <MdOutlineLocalFireDepartment />
                        <p className='text-[18px]'>{calories} calories</p>
                        </div>
                </div>
                <button onClick={() => handleCook(recipe)}
                className='w-2/4 bg-[#0BE58A] p-2 h-14 m-3 rounded-2xl text-[#150B2B] text-xl font-medium'>
                    Want to cook
                </button>
        </div>
    );
};
Recipe.propTypes = {
    recipe:PropTypes.object.isRequired,
    handleCook:PropTypes.func
}
export default Recipe;