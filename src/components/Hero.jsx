import React from 'react';

const Hero = () => {
    return (
        <div className=" bg-base-200 ">
            <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-25 ">
                
                <div className="pl-5 mt-30 ">
                    <h1 className="text-8xl font-bold text-orange-400 pb-5">It's Clucking Delicious!!</h1>
            
                    <button className="btn btn-primary rounded-lg bg-yellow-300 text-black ">Get Started</button>
                </div>
                <img
                    src="../images/Hero-burger.png"
                    className="w-lg rounded-lg pl-5"
                />
            </div>
        </div>
    );
};

export default Hero;