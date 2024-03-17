import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
const Prepare = ({prepare}) => {
    const [totalTime, setTotalTime] = useState(0);
    const [totalCalories, setTotalCalories] = useState(0);
    useEffect(() => {
        let time = 0;
        let calories = 0;
        prepare.forEach(recipe => {
            time += recipe.preparing_time;
            calories += recipe.calories;
        });
        setTotalTime(time);
        setTotalCalories(calories);
    }, [prepare]);
  
    return (
        <div>
            <div className="mx-auto ">
                    <h3 className="text-center text-3xl font-medium">Currently cooking:{prepare.length} </h3>
                    <div className=' p-4 flex justify-around'>
                        <h3 className='p-10 font-bold w-1/3'>Recipe Name</h3>
                        <h3 className='p-10 font-bold w-1/3'>Preparing Time</h3>
                        <h3 className='p-10 font-bold w-1/3'>Calories</h3>        
                    </div>
                 {
                     prepare.map((recipe, index) => (
                        <div key={index} className='p-2 flex gap-6 justify-between items-center'>
                            <p className='p-2 text-[16px]'>{index + 1}</p>
                            <div className='w-full'>
                                <table>
                                    <tbody>
                                        <tr className='text-center text-[16px]'>
                                            <td className='pl-10 w-1/3'>{recipe.recipe_name}</td>
                                            <td className='pl-10 w-1/3'>{recipe.preparing_time} minutes</td>
                                            <td className='pl-10 w-1/3'>{recipe.calories} calories</td>
                                        </tr>
                                    </tbody>
                                </table>
                               
                            </div>
                            
                        </div>
                        
                    ))
                 }
                  <div className='p-2 m-2 flex justify-end items-center gap-4'>
                <p>Total time: {totalTime} minutes</p>
                <p>Total calories: {totalCalories} calories</p>
                 </div>

            </div>
        </div>
    );
};
Prepare.propTypes = {
    prepare: PropTypes.array.isRequired,
};
export default Prepare;