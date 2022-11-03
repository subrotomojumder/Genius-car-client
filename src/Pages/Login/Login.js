import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(() => {
                alert('login your account')
                navigate(from, { replace: true });
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
                    <h1 className="text-5xl font-bold text-center">Login</h1>
                    <form onSubmit={handleSubmit} className="card-body">
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
                            <label className="label">
                                <Link to="" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>New to Genius car <Link to='/signup' className='text-orange-500 font-semibold hover:link'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;