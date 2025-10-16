import React, { useState } from 'react';
import beachBg from "/images/Beach_cleanup.jpg";

// You can replace this with a relevant icon from a library like react-icons
const HeartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);


const Donate = () => {
  const [amount, setAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState('');

  const presetAmounts = [10, 25, 50, 100];

  const handlePresetClick = (value) => {
    setAmount(value);
    setCustomAmount(''); // Clear custom amount when a preset is chosen
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    // Allow only numbers
    if (/^\d*$/.test(value)) {
        setCustomAmount(value);
        setAmount(Number(value));
    }
  };
  
  const handleDonateSubmit = (e) => {
    e.preventDefault();
    if (amount > 0) {
      // Here you would integrate with a payment gateway like Stripe or PayPal
      alert(`Thank you for your generous donation of $${amount}!`);
    } else {
      alert("Please enter a valid donation amount.");
    }
  };

  return (
    <div className="bg-gray-50 p-4 w-full min-h-[100vh] flex items-center justify-center text-white bg-cover bg-center select-none"
        style={{
            backgroundImage: `linear-gradient(
             rgba(168, 210, 255, 0.7), 
             rgba(41, 177, 204, 0.6), 
             rgba(110, 251, 220, 0.5)
            ), url(${beachBg})`,    
          }}    
    >
      <div className="max-w-lg w-full bg-white/60 rounded-xl shadow-lg p-6 md:p-8 ">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600">Support Our Oceans</h1>
          <p className="text-gray-600 mt-2">
            Every contribution helps us in our mission to clean up beaches and protect marine life.
          </p>
        </div>

        <form onSubmit={handleDonateSubmit}>
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">Choose an amount to donate</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {presetAmounts.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => handlePresetClick(preset)}
                  className={`p-4 rounded-lg font-semibold text-lg transition-all duration-200 ease-in-out
                    ${amount === preset && customAmount === '' 
                      ? 'bg-blue-600 text-white ring-2 ring-offset-2 ring-blue-500' 
                      : 'bg-gray-100 text-gray-800 hover:bg-blue-100 hover:text-blue-700'}`
                  }
                >
                  ${preset}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
             <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 text-center mb-2">
                Or enter a custom amount
              </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 text-lg">$</span>
              <input
                type="text"
                id="custom-amount"
                name="custom-amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder="5.00"
                className="w-full pl-7 pr-4 py-3 border border-gray-300 rounded-lg text-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-4 px-4 rounded-lg text-lg flex items-center justify-center
                         hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                         transition-transform transform hover:scale-105"
            >
              <HeartIcon />
              Donate Now
            </button>
          </div>
        </form>

        <div className="text-center mt-6">
            <p className="text-xs text-gray-700">Secure donations processed by our trusted partners.</p>
        </div>
      </div>
    </div>
  );
};

export default Donate;