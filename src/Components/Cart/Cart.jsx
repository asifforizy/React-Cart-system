import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
    return (
        <div>
            {cart.map(Bottle =>
                <div className='flex gap-10 border p-3 rounded-2xl mb-4' key={Bottle.id}>
                    <div>
                        <img src={Bottle.img} alt="" className='w-[100px]' />
                    </div>
                    <div className='items-center justify-center'>
                        <h1>{Bottle.name}</h1>
                        <h1>price : {Bottle.price} $</h1>
                        
                    </div>
                    <div>
                        <button onClick={() => removeFromCart(Bottle.id)} className='text-2xl text-red-600' >X</button>
                    </div>
                </div>)}
        </div>
    );
};

export default Cart;