import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';

const Bottles = ({ bottlesPromise }) => {

    const [cart, setCart ] = useState([]);

    const handleCart = (bottle) => {
        setCart([...cart, bottle]);
    }



    const Bottles = use(bottlesPromise);
    return (
        <div>
            <h1 className='text-2xl font-bold  text-blue-400' >{Bottles.length} Bottles : </h1>
            <h1  className='text-2xl font-bold mb-10 text-red-600' >Cart: {cart.length}</h1>
            <div className='grid grid-cols-4 gap-10' >
                {
                    Bottles.map(bottle => <Bottle handleCart={handleCart} key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;