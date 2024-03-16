import React from 'react';

const NavBar = () => {
    return (
        <div>
            <div className='container mx-auto flex'>
                <h1 className='font-extrabold text-4xl my-6'>Recipe Calories</h1>
                <div className='flex justify-evenly items-center w-2/4 gap-4 p-2 text-xl font-medium'>
                    <ul>
                        <a className='p-2'>Home</a>
                        <a className='p-2'>Recipes</a>
                        <a className='p-2'>About</a>
                        <a className='p-2'>Search</a>
                    </ul>
                </div>
                <button className='w-1/4 h-[50px] rounded-3xl bg-neutral-200 p-2 m-4'>Search</button>

            </div>
        </div>
    );
};

export default NavBar;