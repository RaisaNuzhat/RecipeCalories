
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
const NavBar = () => {
    return (
        <div>
            <div className='container mx-auto flex justify-evenly items-center'>
                <h1 className='font-extrabold text-4xl my-6'>Recipe Calories</h1>
                <div className='flex justify-evenly items-center w-2/4 gap-4 p-2 text-xl font-medium'>
                    <ul>
                        <a className='p-2'>Home</a>
                        <a className='p-2'>Recipes</a>
                        <a className='p-2'>About</a>
                        <a className='p-2'>Search</a>
                    </ul>
                </div>
                <button className='w-64 h-[50px] rounded-3xl bg-neutral-200 p-2 m-4 flex items-center text-2xl font-medium justify-center gap-3'>
                   <CiSearch />
                    Search
                    </button>
                <button className='rounded-full h-[60px] w-[60px] bg-[#0BE58A] p-2 m-4 text-2xl  flex items-center justify-center'>
                <FaRegUserCircle />
                </button>

            </div>
        </div>
    );
};

export default NavBar;