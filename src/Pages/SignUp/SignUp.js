import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { setAuthToken } from '../../api/authToken';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const SignUp = () => {
    const { createUser, updateUser, emailVerify } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(results => {
                updateUser(name)
                    .then(() => { })
                    .catch(err => console.log(err.message))
                emailVerify()
                    .then(() => alert('please check your email inbox verify your account'))
                    .catch(err => console.log(err.message))
                    setAuthToken(results.user)
            })
            .catch(err => console.log(err.message))
    }
    return (
        <div className="hero py-20">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="">
                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="card w-full max-w-sm shadow-2xl bg-base-100 py-8">
                    <h1 className="text-4xl font-bold text-center">Sign Up</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link to='/login' className='text-orange-500 font-semibold hover:link'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;