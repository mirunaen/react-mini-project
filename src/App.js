import React from 'react';
import './App.css';
import CurrencyRow from "./CurrencyRow";

function App() {
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
