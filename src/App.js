import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from "./CurrencyRow";

const BASE_URL = 'https://api.exchangeratesapi.io/latest';

function App() {
  //equal to empty string cause we got any options yet
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  useEffect(() => {
    fetch(BASE_URL)
      //when we get the fetch back we convert the response
      //to JSON
      .then(res => res.json())
      //which returns another promise that has our data
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
      })
  }, [])
  //with this empty array we will call useEffect just once
  //because the empty array never changes
  //we want to run the useEffect just once
  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
      />
      <div className="equal">
        =
      </div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency} />
    </>
  );
}

export default App;
