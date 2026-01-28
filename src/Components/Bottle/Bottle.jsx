import React from 'react';

const Bottle = ({bottle,handleCart}) => {
    return (
        <div className='border p-8 rounded-2xl'>
            <img src={bottle.img} alt="" className='w-[250px]' />
            <h2>{bottle.name}</h2>
            <p> Price : {bottle.price} $</p>
            <p>{bottle.stock} Remaining</p>
            <button onClick={() => handleCart(bottle)} className='bg-blue-500 text-white px-2 py-1 mt-3 rounded-lg'>Add to Cart</button>
        </div>
    );
};

export default Bottle;