
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
const NavBar = () => {
    return (
        <div>
            <div className='container mx-auto flex justify-evenly items-center'>
                <h1 className='lg:font-extrabold font-medium lg:text-4xl text-[20px] my-6'>Recipe Calories</h1>
                <div className='flex flex-col lg:flex-row justify-evenly items-center lg:w-2/4 gap-4 p-2 text-xl font-medium'>
                    <ul>
                        <a className='lg:p-2 p-1'>Home</a>
                        <a className='lg:p-2 p-1'>Recipes</a>
                        <a className='lg:p-2 p-1'>About</a>
                        <a className='lg:p-2 p-1'>Search</a>
                    </ul>
                </div>
                <button className='lg:w-64 w-48 h-[50px] rounded-3xl bg-neutral-200 p-2 m-4 flex items-center lg:text-2xl text-[18px] font-medium justify-center gap-3'>
                   <CiSearch />
                    Search
                    </button>
                <button className='rounded-full lg:h-[60px] lg:w-[60px] h-[40px] w-[40px] bg-[#0BE58A] p-2 m-4 lg:text-2xl text-[20px]  flex items-center justify-center'>
                <FaRegUserCircle />
                </button>

            </div>
        </div>
    );
};

export default NavBar;