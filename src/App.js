import React, { useState } from 'react';
import './App.css';
import Pricing from './components/Pricing';
// import bgBottom from './images/bg-bottom.svg'
// import bgTop from './images/bg-top.svg'

function App() {

  const [displayMonthly, setDisplayMonthly] = useState(true)

  return (
    <div className="font-montserrat font-bold bg-veryLightGrayishBlue text-grayishBlue h-full lg:h-screen
    bg-[url('./images/bg-top.svg')] bg-mobileTop bg-no-repeat desktop-background">


      <h1 className='text-3xl text-center py-12'>Our Pricing</h1>

      <div className='flex items-center justify-center pb-20'>
        <h2 className='text-lightGrayishBlue'>Annually</h2>
        <label className='mx-7 switch'>
          <input
            type='checkbox'
            defaultChecked
            onClick={() => setDisplayMonthly(!displayMonthly)}
          />
          <span className='slider round bg-blueGradient'></span>
        </label>
        <h2 className='text-lightGrayishBlue'>Monthly</h2>
      </div>

      <Pricing displayMonthly={displayMonthly} />

    </div>
  );
}

export default App;
