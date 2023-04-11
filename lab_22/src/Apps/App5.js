import React, { useState } from 'react';

const App5 = () => {
    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [result, setResult] = useState('');

    const exchangeRates = {
        USD: 1,
        EUR: 0.92,
        UAH: 36.95,
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleFromCurrencyChange = (event) => {
        setFromCurrency(event.target.value);
    };

    const handleToCurrencyChange = (event) => {
        setToCurrency(event.target.value);
    };

    const handleExchange = (event) => {
        event.preventDefault();
        const exchangeRate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
        setResult((amount * exchangeRate).toFixed(2));
    };

    return (
        <div>
            <form onSubmit={handleExchange}>

                <label>
                    Amount:
                    <input type="number" value={amount} onChange={handleAmountChange} />
                </label>

                <label>
                    From:
                    <select value={fromCurrency} onChange={handleFromCurrencyChange}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="UAH">UAH</option>
                    </select>
                </label>

                <label>
                    To:
                    <select value={toCurrency} onChange={handleToCurrencyChange}>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="UAH">UAH</option>
                    </select>
                </label>

                <button type="submit">Exchange</button>
            </form>
            {result && <p>{result} {toCurrency}</p>}
        </div>
    );
};

export default App5;
