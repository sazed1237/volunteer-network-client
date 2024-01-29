import React from 'react';
import { Link } from 'react-router-dom';

const EventCart = ({ event }) => {

    const {_id, title, img } = event;

    return (
        <div className="bg-base-100">
            <figure><img className='rounded-b-none ' src={img} alt="" /></figure>

            <div className="flex rounded-b-xl  py-8 bg-purple-600">
                <div className='text-center '>
                    <h2 className="ml-24 text-xl text-white font-medium">{title}</h2>
                </div>
                <div className='flex-1'>
                    <Link to={`/registerevent/${_id}`} className='bg-orange-500 p-2 rounded-full'>Go</Link>
                </div>


            </div>
        </div>
    );
};

export default EventCart;