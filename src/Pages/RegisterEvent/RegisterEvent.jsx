import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const RegisterEvent = () => {

    const event = useLoaderData()
    const {user} = useContext(AuthContext)

    const {_id, title, date, img } = event;

    const handleRegisterEvent = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const name = form.name.value;
        const number = form.number.value;
        const date = form.date.value;
        const email = form.email.value;

        const registeredEvent = {
            event_id: _id,
            img,
            eventTitle: title, 
            participateName: name, 
            number, 
            date, 
            email,
        }

        fetch('http://localhost:5000/registerevets', {
            method: 'POST', 
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(registeredEvent)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }


    return (
        <div className='bg-[#F4F7FC] col-span-4'>
            <div className=" m-10 min-h-screen ">
                <h3 className='py-7 text-center text-4xl font-bold text-blue-600'>Register Event</h3>
                <div className="w-full rounded-3xl  shadow-2xl bg-base-100">

                    <form onSubmit={handleRegisterEvent} className="card-body " >
                        <div className='grid grid-cols-2 gap-5'>

                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Event Title</span>
                                    </label>
                                    <input type="text" name='title' defaultValue={title} placeholder="Event Title" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Enter Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="number" name='number' placeholder="Enter Mobile Number" className="input input-bordered" required />
                                </div>
                                
                                
                            </div>
                            <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Event Date</span>
                                    </label>
                                    <input type="date" name='date' defaultValue={date} className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' defaultValue={user.email} placeholder="Enter Email" className="input input-bordered" required />
                                </div>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <input className='btn bg-[#0084FF] text-white btn-block' type="submit" value="Register Event" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterEvent;