import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogIn = () => {
    const { googleSingIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSingIn = () =>{
        googleSingIn()
        .then(result => {
            console.log(result.user)
            
            navigate(from, {replace: true})
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="divider">OR</div>
            <div className='flex justify-center pb-4'>
                <button onClick={handleGoogleSingIn}>
                    <FaGoogle className='text-yellow-600 w-7 h-7'></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogIn;