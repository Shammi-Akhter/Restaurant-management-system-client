import React from 'react';

const Feature = () => {
  return (
    
      <div className="container mx-auto grid grid-cols-3 gap-5 my-20">
        <div className='flex justyfy-center flex-col items-center'>
          <img
            src="/images/delicious-food.jpg"
            alt="Delicious Food"
            className="w-64 h-56 rounded "
          />
          <h4 className="font-bold text-2xl p-2 text-center">Delicious Food</h4>
          <p className='text-center'>We provide you with different cuisines of food to satisfy your hunger.</p>
        </div>

        <div className='flex justyfy-center flex-col items-center' >
          <img
            src="/images/chef.jpg"
            alt="Experienced Chef"
            className="w-64 h-56 rounded"
          />
          <h4 className="font-bold text-2xl p-2 text-center">Experienced Chef</h4>
          <p className='text-center'>If you are a happy person around food, we have the right chef for you.</p>
        </div>

        <div className='flex justyfy-center flex-col items-center' >
          <img
            src="/images/quality-food.jpg"
            alt="Quality Services"
            className="w-64 h-56 rounded"
          />
          <h4 className="font-bold text-2xl p-2 text-center">Quality Services</h4>
          <p className='text-center'>The Garden of Eat'n provides the best services for their customers.</p>
        </div>
      </div>

  );
};

export default Feature;
