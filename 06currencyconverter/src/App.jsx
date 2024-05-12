import React, { useState } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo.js';
import { InputBox } from './components/index.js';
import SwapIcon from './assets/swap.svg'

export default function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('inr');
  const [to, setTo] = useState('usd');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convertCurrency = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-lg px-6 py-8 bg-white rounded-lg shadow-md">
      <h1 className='text-xl md:text-2xl text-center font-bold pb-4'>Currency Converter</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convertCurrency();
          }}
        >
          <div className="mb-6 outline outline-2 outline-gray-300 rounded-md p-2">
            <InputBox
              label="from"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectedCurrency={from}
            />
          </div>
          <div className="mb-6 flex flex-col justify-center items-center">
            <button
              type="button"
              onClick={swap}
              className="px-4 py-2 rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition-all duration-300 text-center"
            >
              <img src={SwapIcon} width={50} height={50} />
            </button>
            <span className='text-center text-sm text-gray-500'>Swap Currency Types <br/> and Amounts</span>
          </div>
          <div className="mb-6 outline outline-2 outline-gray-300 rounded-md p-2">
            <InputBox
              label="to"
              currencyOptions={options}
              amount={convertedAmount}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={to}
              amountDisabled
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </section>
  );
}