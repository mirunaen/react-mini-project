import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from "./CurrencyRow";

const BASE_URL = 'https://api.exchangeratesapi.io/latest';

function App() {
  //equal to empty string cause we got any options yet
  const [currencyOptions, setCurrencyOptions] = useState([]);
  useEffect(() => {
    fetch(BASE_URL)
      //when we get the fetch back we convert the response
      //to JSON
      .then(res => res.json())
      //which returns another promise that has our data
      .then(data => {
        //to get the data and get the key portion of the rates
        //...to destructure the array
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      })
  }, [])
  //with this empty array we will call useEffect just once
  //because the empty array never changes
  //we want to run the useEffect just once
  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow />
      <div classNme="equal">
        =
      </div>
      <CurrencyRow />
    </>
  );
}

export default App;
