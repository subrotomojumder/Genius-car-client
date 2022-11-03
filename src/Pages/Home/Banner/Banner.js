import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
import BannerItem from './BannerItem';

const Banner = () => {
    const bannerData = [
        {
            img: img1,
            id : 1,
            pre: 6,
            next: 2
        },
        {
            img: img2,
            id : 2,
            pre: 1,
            next: 3
        },
        {
            img: img3,
            id : 3,
            pre: 2,
            next: 4
        },
        {
            img: img4,
            id : 4,
            pre: 3,
            next: 5
        },
        {
            img: img5,
            id : 5,
            pre: 4,
            next: 6
        },
        {
            img: img6,
            id : 6,
            pre: 5,
            next: 1
        },
    ]
    return (
        <div className="carousel w-full pt-8">
           {
            bannerData.map(banner => <BannerItem 
                banner={banner}
                key={banner.id}
            ></BannerItem>)
           }
        </div>
    );
};

export default Banner;