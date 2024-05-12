import React, { useId } from 'react'

export default function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
    const id = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm md:text-base flex ${className}`}>
            <div className='w-1/2'>
                <label htmlFor={id} className='text-black/40 mb-2 inline-block font-bold'>{label.toLocaleUpperCase()}</label>
                <input id={id} type="number" className='outline-none w-full bg-transparent p-2 outline outline-1 outline-black/30 rounded-md' placeholder='Amount' disabled={amountDisabled} value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
            </div>

            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className="text-black/40 mb-2 w-full font-bold">Currency Type</p>
                <select className='rounded-lg p-2 bg-gray-100 cursor-pointer outline outline-1 outline-gray-400' value={selectedCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(Number(e.target.value))} disabled={currencyDisabled}>
                    {currencyOptions.map((currency, i) => (
                        <option id={i} value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
