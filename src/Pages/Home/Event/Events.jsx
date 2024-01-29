import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EventCart from '../EventCart/EventCart';

const Event = () => {

    const events = useLoaderData();
    

    return (
        <div className='text-center'>

            <div className='grid grid-cols-4 gap-5'>
                {
                    events.map(event => <EventCart
                        key={event._id}
                        event={event}
                    ></EventCart>)
                }
            </div>
        </div>
    );
};

export default Event;