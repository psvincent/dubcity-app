import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../assets/banner/banner1.jpg'
import banner2 from '../assets/banner/banner2.jpeg'

function Banner() {
    return (
        <Carousel>
            <Carousel.Item className="bg-black">
                <img
                    className="d-block w-50 mx-auto"
                    src={banner1}
                    alt="Dub City Banner 1"
                />
            </Carousel.Item>
            <Carousel.Item>
            <img
                    className="d-block w-50 mx-auto"
                    src={banner2}
                    alt="Dub City Banner 2"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Banner;