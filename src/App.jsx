
import './App.css'
import NavBar from './components/Navbar/NavBar'
import Banner from './components/Banner/Banner'
import Recipes from './components/Recipes/Recipes'
import Lists from './components/Lists/Lists'
import { useState } from 'react'
import {  ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  
const [cook,setCook] = useState([]);
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
  return (
    <>
      
      <NavBar></NavBar>
      <Banner></Banner>
      <div className='flex sm:flex-row justify-evenly items-center container mx-auto'>
      <Recipes handleCook={handleCook}></Recipes>
      <Lists cook={cook} ></Lists>
      <ToastContainer/>
      </div>
    
    </>
  )
}

export default App
