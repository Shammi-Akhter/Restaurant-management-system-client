import Navbar from '@/components/Navbar';
import React from 'react';

const page = () => {
    return (
        <div>
            <Navbar />
            <div className='container mx-auto my-5 p-5 flex flex-col gap-5'>
                <h1 className='font-bold text-center text-4xl text-amber-400 '>Contact US</h1>
                <p className='font-medium text-xl text-center' >Connecting minds, one massage at a time.</p>
                <div className='mx-70'>
                    <div className='grid grid-cols-2  my-5 '>
                    <div>
                        <h4>Name</h4>
                        <input type="text" placeholder="" className='rounded border border-amber-200 w-80 p-2' />
                    </div>
                    <div>
                        <h4>Email</h4>
                        <input type="email" placeholder="" className='rounded border border-amber-200 w-80 p-2' />
                    </div>
                </div>
                <div>
                    <h4>Message</h4>
                    <textarea placeholder="" className='rounded border border-amber-200 w-[665px] p-2' rows={5} ></textarea>
                </div>
                <div className='flex justify-center my-5'>
                    <button className='btn btn-primary bg-yellow-300 text-black rounded-lg'>Submit</button>
                </div>
                </div>
            </div>
        </div>

    );
};

export default page;