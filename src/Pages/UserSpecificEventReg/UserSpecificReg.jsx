import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import UserSpecificRow from './UserSpecificRow';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const UserSpecificReg = () => {

    const { user } = useContext(AuthContext);
    const [events, setEvents] = useState([]);
    const navigate = useNavigate()

    const url = `https://volunteer-network-server-chi.vercel.app/registerevets?email=${user?.email}`
    useEffect(() => {
        // jwt verify  
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem('volunteer-network-token')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (!data.error) {
                    setEvents(data)
                }
                else {
                    navigate('/')
                    // or Status page like 404
                }
            })
    }, [url, navigate])

    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't to Cancel this!",
            icon: "warning",
            showDenyButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://volunteer-network-server-chi.vercel.app/registerevets/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)

                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Cancel!",
                                text: "Your Event has been Cancel.",
                                icon: "success"
                            });
                        }

                        const remaining = events.filter(event => event._id !== id);
                        setEvents(remaining)
                    })


            }
        });

    }

    return (
        <div>
            <h3 className='text-center text-2xl font-bold py-5 text-blue-500'>Your Register Events: <span className='text-red-600'>{events.length}</span></h3>

            <div className='flex justify-center'>
                <div className="overflow-x-auto  ">
                    <table className="table grid grid-cols-2">
                        {
                            events.map(event => <UserSpecificRow
                                key={event._id}
                                event={event}
                                handleDelete={handleDelete}
                            ></UserSpecificRow>)
                        }

                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserSpecificReg;