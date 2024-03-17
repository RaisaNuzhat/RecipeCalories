
import bannerImage from '../../assets/banner.png';

const Banner = () => {
    return (
        <div>
            <div className='container mx-auto my-4'>
                <img src={bannerImage} alt="" className='h-[600px] mx-auto' /> 
                <h3 className='lg:text-5xl text-center lg:-translate-y-96 text-white font-bold'>Discover an exceptional cooking <br /> class tailored for you!</h3>
                <p className='text-2xl lg:-translate-y-80 text-center text-white'> Rediscover the comforting embrace of home-cooked meals <br /> and the warmth of shared meals with loved ones. </p>
                <div className='flex lg:-translate-y-72 text-center justify-center gap-4'>
                    <button className='bg-[#0BE58A] rounded-2xl w-1/3 p-2 h-12 text-black border-none'>Explore Now</button>
                    <button className='w-1/3 p-2 h-12 text-white  border-white rounded-2xl border-solid border-2'>Our Feedback</button>
                </div>

            </div>
            <div className='container mx-auto my-3 text-center'>
                        <h1 className='text-5xl font-bold mb-2'>Our Recipes</h1>
                        <p className='text-xl my-2'>Transform simple ingredients into extraordinary meals that tantalize the taste buds. <br /> Join us as we celebrate the art of <br />
                         cooking and share mouthwatering recipes that bring joy to every table.</p>
            </div>
        </div>
    );
};

export default Banner;
