import React from 'react';

function App() {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center flex-col-reverse" style={{
      background: 'linear-gradient(to bottom, #FOF4FD, #A1A3BA)'
    }}>
      <div className='mt-5 text-center'>
        <h1 className="font-black text-5xl">Fresh Healthy <br />
          <span className="font-light">Delicious Salads</span>
        </h1>
        <p className="text-base text-gray-700">We made fresh and healthy foods</p>
        <span className='inline-block bg-indigo-500 px-10 py-5 rounded-full shadow-lg uppercase text-lg tracking-wide'>Explore</span>
      </div>
      <img src={process.env.PUBLIC_URL + "/assets/food.svg"} alt="food" className="w-screen" />
    </div >
  );
}

export default App;
