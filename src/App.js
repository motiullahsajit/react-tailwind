import React, { useEffect, useState } from 'react';

function App() {
  const [isAnimated, setIsAnimated] = useState(false);
  useEffect(() => {
    setIsAnimated(true)
  }, [])

  return (
    <div className="min-h-screen w-screen-lg flex justify-center items-center flex-col-reverse lg:flex-row lg:justify-around" style={{
      background: 'linear-gradient(to bottom, #FOF4FD, #A1A3BA)'
    }}>
      <div className={`${isAnimated ? 'scale-y-100' : 'scale-y-0'} transform transition duration-1000 ease-in-out mt-10 text-center lg:text-left`}>
        <h1 className="font-black text-5xl lg:text-6xl">Fresh Healthy <br />
          <span className="font-light">Delicious Salads</span>
        </h1>
        <p className="text-base text-gray-700">We made fresh and healthy foods</p>
        <span className='inline-block bg-indigo-500 px-10 py-5 rounded-full shadow-lg uppercase text-lg tracking-wide mt-5'>Explore</span>
      </div>
      <img src={process.env.PUBLIC_URL + "/assets/food.svg"} alt="food" className={`w-screen lg:max-w-xl transform transition ${isAnimated ? "scale-150" : "translate-x-full translate-y-full"} duration-1000 ease-in-out`} />
    </div >
  );
}

export default App;
