import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-500 p-6 mt-6 rounded-md flex flex-col'>
            <h2 className='mb-4'>
                <span className='font-bold text-2xl text-purple-700'>{price.price}</span>
                <span className='text-xl'>/month</span>
            </h2>
            <h2 className='font-bold text-4xl mb-4'> {price.name}</h2>
            <h3 className='font-bold text-xl mb-4 underline text-yellow-100'>Feature:</h3>
            {
                price.features.map((feature,idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
             <button className='mt-auto w-full bg-green-500 hover:bg-gray-800 text-white font-bold py-2 rounded-md'>Buy Now</button>
        </div>
    );
};

export default PriceCard;