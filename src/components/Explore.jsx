import React from 'react';
import { SiFireship } from 'react-icons/si';
const Explore = () => {
    return (
        <div className='container mx-auto p-10'>

            <h4 className='text-4xl font-bold text-yellow-400 text-center p-5'>Know our flavors</h4>

            <div className="grid grid-cols-4 justify-center gap-5">
                <div className='p-5 rounded-2xl shadow-md  shadow-amber-300 bg-white' >
                    <h4 className='text-2xl  font-semibold p-1'>Signature</h4>
                    <div className='flex items-center gap-2'>
                        <p className='p-1 text-amber-400'>Spice Level</p> <SiFireship className='text-yellow-400' />
                    </div>
                    <p className='p-1 text-sm'>Traditional spice mix with pepper and salt</p>
                </div>
                <div className='p-5 rounded-2xl shadow-md  shadow-amber-300 bg-white' >
                    <h4 className='text-2xl  font-semibold p-1'>TangyTingle</h4>
                   <div className='flex items-center gap-2'>
                        <p className='p-1 text-amber-400'>Spice Level</p> <SiFireship className='text-yellow-400' /> <SiFireship className='text-yellow-400' />
                    </div>
                    <p className='p-1 text-sm'>Oriental spices coated with a Sweet and Tangy in-house sauce</p>
                </div>
                <div className='p-5 rounded-2xl shadow-md  shadow-amber-300 bg-white' >
                    <h4 className='text-2xl  font-semibold p-1'>Parmaroma</h4>
                    <div className='flex items-center gap-2'>
                        <p className='p-1 text-amber-400'>Spice Level</p> <SiFireship className='text-yellow-400' />
                    </div>
                    <p className='p-1 text-sm'>Black & White Pepper garnished with Parmesan Cheese</p>
                </div>
                <div className='p-5 rounded-2xl shadow-md  shadow-amber-300 bg-white' >
                    <h4 className='text-2xl  font-semibold p-1'>Kashmiri Spice</h4>
                    <div className='flex items-center gap-2'>
                        <p className='p-1 text-amber-400'>Spice Level</p> <SiFireship className='text-yellow-400' /> <SiFireship className='text-yellow-400' /> <SiFireship className='text-yellow-400' />
                    </div>
                    <p className='p-1 text-sm'>A harmonious blend of warmth, depth and aromatic Kashmiri spices blend</p>
                </div>

            </div>
        </div>
    );
};

export default Explore;