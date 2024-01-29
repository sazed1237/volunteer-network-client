import React from 'react';
import { Link } from 'react-router-dom';

const RegisterEventRow = ({ event, handleDeleteRegister, handleRegisterConfirm }) => {
    const { _id, eventTitle, participateName, number, date, email, img, status } = event
    return (

        <tr>
            <th>
                <label>
                    <button onClick={() => handleDeleteRegister(_id)}>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{eventTitle}</div>
                    </div>
                </div>
            </td>
            <td>
                {participateName}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{number}</td>
            <td>{date}</td>
            <th>
                {
                    status === 'confirm' ?
                        <span className='font-bold text-blue-600'>Confirmed</span>
                        :
                        <button onClick={() => handleRegisterConfirm(_id)} className="btn btn-ghost btn-xs">Pending</button>

                }
            </th>
        </tr>
    );
};

export default RegisterEventRow;