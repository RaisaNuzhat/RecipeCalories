
import PropTypes from 'prop-types';
import List from './List';
const Lists = ({cook}) => {
    return (
        <div>
            <div className="p-3 border-b-2 border-neutral-100 w-full">
                <h3 className="text-center text-3xl font-medium">Want to Cook: {cook.length}</h3>
            
            </div>
            <div>
                 <div className=' p-4 flex justify-around'>
                       
                        
                        <h3 className='p-10 font-bold w-1/3'>Recipe Name</h3>
                        <h3 className='p-10 font-bold w-1/3'>Preparing Time</h3>
                        <h3 className='p-10 font-bold w-1/3'>Calories</h3>
                      
                    
                
                        
                 </div>
           
                
                {
                    cook.map((cook,index) => 
                    <List key={index} cook={cook} index={index}></List>)
                }
            </div>
           
        </div>
    );
};

Lists.propTypes = 
{
  cook: PropTypes.array.isRequired,
}
export default Lists;