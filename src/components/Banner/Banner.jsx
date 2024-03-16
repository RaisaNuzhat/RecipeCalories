import React from 'react';
import bannerImage from '../../assets/banner.png';

const Banner = () => {
    return (
        <div>
            <div className='container mx-auto my-4'>
                <img src={bannerImage} alt="" className='h-[600px] mx-auto' /> 
                <h3 className='lg:text-5xl text-center lg:-translate-y-96 text-white font-bold'>Discover an exceptional cooking <br /> class tailored for you!</h3>
                <p className='text-2xl lg:-translate-y-80 text-center text-white'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
                <div className='flex lg:-translate-y-72 text-center justify-center gap-4'>
                    <button className='bg-[#0BE58A] rounded-2xl w-1/3 p-2 h-12 text-black border-none'>Explore Now</button>
                    <button className='w-1/3 p-2 h-12 text-white  border-white rounded-2xl border-solid border-2'>Our Feedback</button>
                </div>

            </div>
            <div className='container mx-auto my-3 text-center'>
                        <h1 className='text-5xl font-bold mb-2'>Our Recipes</h1>
                        <p className='text-xl my-2'>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. <br /> 
                        Eget urna volutpat curabitur elementum mauris aenean neque.</p>
            </div>
        </div>
    );
};

export default Banner;
