import React from 'react';

const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="../images/1.jpg"
                    className="w-xl rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-8xl font-bold text-orange-400">It's Clucking Delicious!!</h1>
            
                    <button className="btn btn-primary rounded-lg bg-yellow-300 text-black ">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;