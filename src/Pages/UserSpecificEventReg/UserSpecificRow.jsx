import React from 'react';

const UserSpecificRow = ({ event, handleDelete }) => {
    const { _id, img, eventTitle, date } = event
    return (
        <tbody>
            <tr>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask rounded-lg w-28 h-28">
                                {img &&
                                    <img src={img} alt="Avatar Tailwind CSS Component" />
                                }
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{eventTitle}</div>
                            <div className="text-sm opacity-50">{date}</div>
                        </div>
                    </div>
                </td>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-xs">Cancel</button>
                </th>
            </tr>
        </tbody>




    );
};

export default UserSpecificRow;