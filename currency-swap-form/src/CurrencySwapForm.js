import React, { useState } from 'react';

const CurrencySwapForm = () => {
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSwap = (e) => {
    e.preventDefault();
    if (!fromCurrency || !toCurrency || !amount) {
      setError('All fields are required');
      return;
    }

    // Placeholder logic for currency conversion (replace with actual logic or API call)
    const convertedAmount = (parseFloat(amount) * 1.1).toFixed(2); // Simulate conversion rate
    setResult(`${amount} ${fromCurrency} is approximately ${convertedAmount} ${toCurrency}`);
    setError('');
  };

  return (
    <form onSubmit={handleSwap}>
      <div>
        <label>From:</label>
        <input 
          type="text" 
          value={fromCurrency} 
          onChange={(e) => setFromCurrency(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>To:</label>
        <input 
          type="text" 
          value={toCurrency} 
          onChange={(e) => setToCurrency(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Amount:</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Swap</button>
      {result && <div>Result: {result}</div>}
      {error && <div style={{color: 'red'}}>{error}</div>}
    </form>
  );
};

export default CurrencySwapForm;
