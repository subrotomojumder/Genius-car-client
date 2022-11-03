import React from 'react';
import './BannerItem.css'

const BannerItem = ({banner}) => {
    const {img, id, pre, next} = banner;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={img} alt='' className="w-full rounded-2xl " />
            </div>
            <div className="absolute flex transform -translate-y-1/2 bottom-10 right-16 ">
                <a href={`#slide${pre}`} className="btn btn-circle mr-4">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute flex transform w-1/5 -translate-y-1/2 bottom-10 left-12 top-1/2 text-3xl font-bold text-white">
                <h3>Affordable <br /> Price for Car Servicing</h3>
            </div>
            <div className="absolute flex transform w-1/2 -translate-y-1/2 bottom-10 left-12 top-2/3  text-lg font-semibold text-white">
                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex transform w-1/2 -translate-y-1/2 bottom-10 left-12 top-3/4  text-lg font-semibold text-white">
                <button className="btn btn-warning rounded-lg mr-6">Warning</button>
                <button className="btn btn-outline btn-warning rounded-lg">Button</button>
            </div>
        </div>
    );
};

export default BannerItem;