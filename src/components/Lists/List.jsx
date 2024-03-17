import PropTypes from 'prop-types';

const List = ({cook,index,handleAddPrepare}) => {
    const {recipe_name,preparing_time,calories} = cook;
    
    
    return (
        <div>
            
             <div className='p-2 flex gap-6 justify-between items-center'>
                    <p className='p-2 text-[16px]'>{index+1}</p>
                  <div className='w-full'>
                     <table>
                        <tbody>
                            <tr className='text-center text-[16px]'>
                                <td className='pl-10 w-1/3'>{recipe_name}</td>
                                <td className='pl-10 w-1/3'> {preparing_time} minutes</td>
                                <td className='pl-10 w-1/3'> {calories} calories</td>
                                
                            </tr>
                        </tbody>
                     </table>
                     
                  </div>
                  <button onClick={() => 
                  handleAddPrepare(cook) 
                  }
                    className='w-24 bg-[#0BE58A]  p-2 h-14 ml-10 rounded-2xl text-[#150B2B] text-[18px] font-medium'>
                             Preparing
                </button> 
            </div>
        </div>
    );
};
List.propTypes = 
{
  cook: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  setCook: PropTypes.func.isRequired,
  handleAddPrepare:PropTypes.func.isRequired,

}
export default List;