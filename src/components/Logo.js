import React, { useState } from 'react';

const Logo = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleClick = () => {
        alert("Welcome to Real Estate!");
    };

    const createRect = (x, y, width, height, fill) => {
        return React.createElement('rect', { x, y, width, height, fill });
    };

    const createPolygon = (points, fill) => {
        return React.createElement('polygon', { points, fill });
    };


    return (
        <div className="logo" onClick={handleClick}>
            {React.createElement(
                'svg',
                {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 64 64",
                    onMouseEnter: handleMouseEnter,
                    onMouseLeave: handleMouseLeave,
                    style: { cursor: 'pointer' }
                },
                createRect(12, 24, 40, 28, isHovered ? "#7272d6" : "#5151a5"),
                createPolygon("32,8 8,28 12,28 12,52 24,52 24,40 40,40 40,52 52,52 52,28 56,28", isHovered ? "#7272d6" : "#5151a5"),
                createRect(24, 40, 16, 12, "#fff")
            )}
            <span className="logo-text">Real Estate</span>
        </div>
    );
};

export default Logo;