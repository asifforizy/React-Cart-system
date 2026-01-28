import React, { Suspense } from 'react';
import Bottles from './Components/Bottles/Bottles';

const bottlesPromise = fetch('./bottles.json')
.then(res => res.json())




const App = () => {




  return (
    <div className='ml-10'>
      <h1 className='text-4xl font-bold text-center text-blue-400'> Bottle Store</h1>
      <Suspense fallback={<div>Bottles are Loading...</div>}>
        <Bottles bottlesPromise ={bottlesPromise} ></Bottles>
      </Suspense>
    </div>
  );
};

export default App;