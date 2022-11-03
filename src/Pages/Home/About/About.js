import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero py-40">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} alt='' className=" w-5/6 rounded-lg shadow-2xl" />
                    <img src={parts} alt='' className="absolute right-5 top-1/2 w-2/3 border-8 border-emerald-50 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h4 className='text-xl text-orange-400 mb-3'>About Us</h4>
                    <h1 className="text-5xl font-bold">
                        We are qualified <br />
                        & of experience <br />
                        in this field
                    </h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        <br />
                        <br />
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className="btn btn-outline rounded-lg">Get more info</button>
                </div>
            </div>
        </div>
    );
};

export default About;