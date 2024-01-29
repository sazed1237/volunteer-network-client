import React from 'react';
import banner from '../../../assets/Banner/image 1.png';

const Banner = () => {
    return (
        <div className='h-[400px] relative bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]' style={{ backgroundImage: `url(https://i.postimg.cc/8cFMBzvX/image-1.png)`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className='bg-[rgba(255,255,255,0.8)] h-[400px] relative '>
                <h2 className='text-center text-4xl font-bold uppercase text-black pt-24'>I grow by helping people in need.</h2>

                <div className="join mt-5">
                    <input type='text' name='search' className="input input-bordered join-item w-96 " placeholder="Search" />
                    <button className="btn bg-[#3F90FC] text-white join-item rounded-r-lg">Search</button>
                </div>

            </div>
           
        </div>
    );
};

export default Banner;