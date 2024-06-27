import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ActivityCarousel.css';

const ActivityCarousel = ({ images }) => {
    return (
        <Carousel showThumbs={false} autoPlay infiniteLoop>
            {images.map((src, index) => (
                <div key={index}>
                    <img src={src} alt={`Slide ${index}`} />
                </div>
            ))}
        </Carousel>
    );
};

export default ActivityCarousel;
