import React, { useEffect } from 'react';
import './App.css';
import CurrencyRow from "./CurrencyRow";

const BASE_URL = 'https://api.exchangeratesapi.io/latest';

function App() {
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
