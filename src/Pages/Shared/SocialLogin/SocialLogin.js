import React, { useContext } from 'react';
import { setAuthToken } from '../../../api/authToken';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const {googleLogin} = useContext(AuthContext);

    const handelGoogleSignIn = () => {
        googleLogin()
        .then(results =>{
            const user = results.user;
            // console.log(currentUser)
            setAuthToken(user)
        })
        .catch(err => console.log(err.message))
    } 
    return (
        <div>
            <p className='text-center'><small>Social Login</small></p>
            <p className='text-center'>
                <button onClick={handelGoogleSignIn} className='btn btn-ghost'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;