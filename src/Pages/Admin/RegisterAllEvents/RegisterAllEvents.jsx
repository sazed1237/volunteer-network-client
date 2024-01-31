import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RegisterEventRow from './RegisterEventRow';
import Swal from 'sweetalert2';
import LeftSideBar from '../../Shared/LeftSideBar/LeftSideBar';

const RegisterAllEvents = () => {

    const loadedRegisterAllEvents = useLoaderData()
    const [registerAllEvents, setRegisterAllEvents] = useState(loadedRegisterAllEvents)


    const handleDeleteRegister = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/registerevets/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Event has been deleted.",
                                icon: "success"
                            });
                            const remaining = registerAllEvents.filter(event => event._id !== id)
                            setRegisterAllEvents(remaining)
                        }

                    })
            }
        });
    }


    const handleRegisterConfirm = id => {
        console.log(id)
        fetch(`http://localhost:5000/registerevets/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: confirm })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Your Event has been Confirmed.",
                        icon: "success"
                    });
                    const remaining = registerAllEvents.filter(event => event._id !== id)
                    const updated = registerAllEvents.find(event => event._id === id)
                    updated.status = 'confirm'
                    const newRegisterEvents = [updated, ...remaining]
                    setRegisterAllEvents(newRegisterEvents)
                }

            })
    }

    return (
        <div>

            <div className='grid grid-cols-5'>
                <div>
                    <LeftSideBar></LeftSideBar>
                </div>

                <div className="overflow-x-auto col-span-4">
                    <h1 className='text-center text-3xl text-blue-600 font-bold py-7'>Register All Event: {registerAllEvents.length}</h1>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Delete</th>
                                <th>Event Detail</th>
                                <th>ParticipateName & Email</th>
                                <th>Mobile Number</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                registerAllEvents.map(event => <RegisterEventRow
                                    key={event._id}
                                    event={event}
                                    handleDeleteRegister={handleDeleteRegister}
                                    handleRegisterConfirm={handleRegisterConfirm}
                                ></RegisterEventRow>)
                            }

                        </tbody>


                    </table>
                </div>

            </div>



        </div>
    );
};

export default RegisterAllEvents;