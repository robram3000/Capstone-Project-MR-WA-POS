import React, { useState } from 'react';

const images = [
    'https://via.placeholder.com/600x300?text=Slide+1',
    'https://via.placeholder.com/600x300?text=Slide+2',
    'https://via.placeholder.com/600x300?text=Slide+3'
];

const Slider = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div style={{ position: 'relative', width: '600px', margin: 'auto' }}>
            <img
                src={images[current]}
                alt={`Slide ${current + 1}`}
                style={{ width: '100%', borderRadius: '8px' }}
            />
            <button
                onClick={prevSlide}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '10px',
                    transform: 'translateY(-50%)',
                    background: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    padding: '10px',
                    cursor: 'pointer'
                }}
            >
                &#8592;
            </button>
            <button
                onClick={nextSlide}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '10px',
                    transform: 'translateY(-50%)',
                    background: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    padding: '10px',
                    cursor: 'pointer'
                }}
            >
                &#8594;
            </button>
        </div>
    );
};

export default Slider;