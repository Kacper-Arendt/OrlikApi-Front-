import React from "react";

import Image from '../../assets/mainImage.jpg';

const mainImage = () => (
    <div style={{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
        backgroundPosition: "center",
    }}> </div>
);

export default mainImage;