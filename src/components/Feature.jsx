import React from 'react';

const Feature = () => {
  return (
    
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center gap-10 my-20">
        <div >
          <img
            src="/images/delicious-food.jpg"
            alt="Delicious Food"
            className="w-64 h-56 rounded "
          />
          <h4 className="font-bold text-2xl p-2 text-center">Delicious Food</h4>
          <p>We provide you with different cuisines of food to satisfy your hunger.</p>
        </div>

        <div >
          <img
            src="/images/chef.jpg"
            alt="Experienced Chef"
            className="w-64 h-64 rounded"
          />
          <h4 className="font-bold text-2xl p-2 text-center">Experienced Chef</h4>
          <p>If you are a happy person around food, we have the right chef for you.</p>
        </div>

        <div >
          <img
            src="/images/quality-food.jpg"
            alt="Quality Services"
            className="w-64 h-64 rounded"
          />
          <h4 className="font-bold text-2xl p-2 text-center">Quality Services</h4>
          <p>The Garden of Eat'n provides the best services for their customers.</p>
        </div>
      </div>

  );
};

export default Feature;
