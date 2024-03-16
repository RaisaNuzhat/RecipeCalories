

import './App.css'

import NavBar from './components/Navbar/NavBar'
import Banner from './components/Banner/Banner'
import Recipes from './components/Recipes/Recipes'
import Lists from './components/Lists/Lists'
function App() {
  

  return (
    <>
      
      <NavBar></NavBar>
      <Banner></Banner>
      <div className='flex sm:flex-row justify-evenly container mx-auto'>
      <Recipes></Recipes>
      <Lists></Lists>
      </div>
    
    </>
  )
}

export default App
