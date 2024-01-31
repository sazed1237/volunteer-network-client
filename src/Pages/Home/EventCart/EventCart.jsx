import React from 'react';
import { FaArrowAltCircleRight, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EventCart = ({ event }) => {

    const { _id, title, img } = event;

    return (
        <div className="bg-base-100">
            <figure><img className='rounded-b-none ' src={img} alt="" /></figure>

            <div className="rounded-b-xl  py-8 bg-purple-600">
                <div>
                    <Link to={`/registerevent/${_id}`} className='flex justify-center text-center'>
                        <h2 className="text-xl text-white font-medium">{title}</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EventCart;