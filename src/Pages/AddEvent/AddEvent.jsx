import React from 'react';
import LeftSideBar from '../Shared/LeftSideBar/LeftSideBar';
import Swal from 'sweetalert2';

const AddEvent = () => {

    const handleAddEvent = event => {
        event.preventDefault()

        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const date = form.date.value;
        const img = form.img.value;

        const newEvent = { title, description, date, img }
        console.log(newEvent)

        fetch('http://localhost:5000/events', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Register Successful!",
                        text: "Your Event has been Registered.",
                        icon: "success"
                    });
                }
            })
    }

    return (
        <div className='grid grid-cols-5 gap-5'>
            <div>
                <LeftSideBar></LeftSideBar>
            </div>
            <div className='bg-[#F4F7FC] rounded-xl col-span-4'>
                <div className=" m-10 min-h-screen ">
                    <h3 className='mb-7 ml-3 text-3xl font-bold text-blue-600'>Add Event</h3>
                    <div className="w-full rounded-3xl  shadow-2xl bg-base-100">

                        <form onSubmit={handleAddEvent} className="card-body " >
                            <div className='grid grid-cols-2 gap-5'>
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Event Title</span>
                                        </label>
                                        <input type="text" name='title' placeholder="Event Title" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Description</span>
                                        </label>
                                        <textarea placeholder="Description" name='description' className="textarea textarea-bordered textarea-md w-full " ></textarea>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Event Date</span>
                                        </label>
                                        <input type="date" name='date' className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Banner</span>
                                        </label>
                                        <input type="text" name='img' placeholder="Banner URL" className="input input-bordered" required />
                                        {/* <input type="file" name='img' accept='image' placeholder="" required /> */}
                                    </div>
                                </div>
                            </div>
                            <div className='mt-6'>
                                <input className='btn bg-[#0084FF] text-white btn-block' type="submit" value="Add Event" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;