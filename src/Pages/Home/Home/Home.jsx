import React from 'react';
import Banner from '../Banner/Banner';
import EventCart from '../EventCart/EventCart';
import Event from '../Event/Events';

const Home = () => {
    return (
        <div className='text-center relative'>
            <Banner></Banner>
            <Event></Event>
        </div>
    );
};

export default Home;