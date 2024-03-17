
import './App.css'
import NavBar from './components/Navbar/NavBar'
import Banner from './components/Banner/Banner'
import Recipes from './components/Recipes/Recipes'
import Lists from './components/Lists/Lists'
import Prepare from './components/Lists/Prepare'
import { useState } from 'react'
import {  ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  
const [cook,setCook] = useState([]);
const [prepare, setPrepare] = useState([])

const handleCook = recipe =>
{
  const isExist = cook.find(item => item.recipe_id == recipe.recipe_id)
  if(!isExist)
  {
    const newCook = [...cook,recipe];
    setCook(newCook);
  }
  else{
    toast.error('Recipe already added!', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
    
  }
}
const handleAddPrepare = recipe =>
    {
        const newPrepare = [...prepare,recipe];
        setPrepare(newPrepare)
        const updatedCook = cook.filter((item) => item.recipe_id !== recipe.recipe_id);
        setCook(updatedCook);
    }
   
  return (
    <>
      
      <NavBar></NavBar>
      <Banner></Banner>
      <div className='flex sm:flex-row justify-evenly items-center container mx-auto my-4'>
      <Recipes handleCook={handleCook}></Recipes>
      <div className='flex flex-col gap-4'>
      <Lists cook={cook} handleAddPrepare={handleAddPrepare}></Lists>
      <Prepare prepare={prepare} />
      </div>
      <ToastContainer/>
      </div>
    
    </>
  )
}

export default App;
