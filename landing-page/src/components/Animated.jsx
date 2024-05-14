import React from 'react';
import { Lottie } from 'lottie-react';

const lottieOptions = {
    path: '/assets/images/animation.json',
    loop: true,
    autoplay: true,
};

const Animated = () => {
    return (
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <Lottie {...lottieOptions} style={{ width: 600, height: 400 }} />
        </div>
    );
};

export default Animated;
