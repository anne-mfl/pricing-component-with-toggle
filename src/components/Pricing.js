import React from 'react'

function Pricing({ displayMonthly }) {

  const plans = [
    {
      name: 'Basic',
      monthlyPrice: 19.99,
      annualPrice: 199.99,
      storage: '500 GB',
      allowedUsers: 2,
      sendGB: 3,
    },
    {
      name: 'Professional',
      monthlyPrice: 24.99,
      annualPrice: 249.99,
      storage: '1 TB',
      allowedUsers: 5,
      sendGB: 10,
    },
    {
      name: 'Master',
      monthlyPrice: 39.99,
      annualPrice: 399.99,
      storage: '2 TB',
      allowedUsers: 10,
      sendGB: 20,
    }
  ]


  return (
    <div className='pb-10 lg:flex lg:items-center lg:px-40'>
      {
        plans.map((plan, key) =>
          <div
            key={plan.name}
            className={key % 2 === 1
              ? 'mb-10 bg-white even:bg-blueGradient even:text-white w-10/12 text-center mx-auto z-10 rounded-xl py-6 px-8 lg:py-12 h-full shadow-md shadow-themeBlue/30'
              : 'mb-10 bg-white even:bg-blueGradient even:text-white w-10/12 text-center mx-auto z-10 rounded-xl p-6 h-full shadow-md shadow-themeBlue/30'}>

            <h1 className='pb-5'>{plan.name}</h1>

            <div className='flex justify-center items-center  pb-6 border-b border-lightGrayishBlue'>
              <p className='text-2xl mr-1'>$</p>
              <h2 className='text-6xl'>{displayMonthly ? plan.monthlyPrice : plan.annualPrice}</h2>
            </div>

            <p className='py-4 border-b border-lightGrayishBlue'>{plan.storage} Storage</p>
            <p className='py-4 border-b border-lightGrayishBlue'>{plan.allowedUsers} Users Allowed</p>
            <p className='py-4 border-b border-lightGrayishBlue'>Send up to {plan.sendGB} GB</p>

            <button className={key % 2 === 1
              ? 'bg-white text-themeBlue mt-6 py-2 w-full rounded-lg text-sm font-semibold hover:text-white hover:bg-transparent border border-white'
              : 'bg-blueGradient text-white mt-6 py-2 w-full rounded-lg text-sm font-semibold hover:text-themeBlue border border-themeBlue hover:bg-none'
            }>LEARN MORE</button>
          </div>
        )
      }
    </div>
  )
}

export default Pricing