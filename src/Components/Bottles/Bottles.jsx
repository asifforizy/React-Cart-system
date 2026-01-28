import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import { addToCartInLS, removeCartInLS } from '../../Utilities/LocalStorage';
import Cart from '../Cart/Cart';

const Bottles = ({ bottlesPromise }) => {

    const [cart, setCart] = useState([]);

    const handleCart = (bottle) => {
        setCart([...cart, bottle]);

        // Add to local storage
        addToCartInLS(bottle.id);
    }

    const removeFromCart = (id) => {
        const newCart = cart.filter(bottle => bottle.id !== id);
        setCart(newCart);
        removeCartInLS(id);

    }



    const Bottles = use(bottlesPromise);
    return (
        <div className='mt-10 flex'>
            <div  >
                <h1 className='text-2xl font-bold  text-blue-400' >{Bottles.length} Bottles : </h1>

                <div className='grid grid-cols-4 gap-10' >
                    {
                        Bottles.map(bottle => <Bottle handleCart={handleCart} key={bottle.id} bottle={bottle}></Bottle>)
                    }
                </div>

            </div>

            <div className='ml-10'>
                <h1 className='text-2xl font-bold mb-10 text-red-600 ' >Cart: {cart.length}</h1>
                <Cart cart={cart} removeFromCart={removeFromCart} ></Cart>
            </div>
        </div>
    );
};

export default Bottles;