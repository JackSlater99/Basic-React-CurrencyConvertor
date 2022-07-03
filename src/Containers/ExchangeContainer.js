import "./ExchangeContainer.css"
import CurrencyInput from "../Components/CurrencyInput";
import React, {useState, useEffect} from "react";

function ExchangeContainer() {

  const [money1, setMoney1] = useState(1);
  const [money2, setMoney2] = useState(1);
  const [currency1, setCurrency1] = useState('GBP');
  const [currency2, setCurrency2] = useState('USD');
  const [exchangeRates, setExchangeRates] = useState([]);

  useEffect(() => {
    getExchangeRates();
}, [])

async function getExchangeRates() {
    const url = 'https://open.er-api.com/v6/latest/gbp'
    const response = await fetch(url)
    const data = await response.json()
    setExchangeRates(data.rates)       
}

  useEffect(() => {
    if (!!exchangeRates) {
      function noExchangeRates() {
        handleMoney1Change(1);
      }
      noExchangeRates();
    }
  }, [exchangeRates]);



  function format(number) {
    return number.toFixed(2);
  }

  function handleMoney1Change(money1) {
    setMoney2(format(money1 * exchangeRates[currency2] / exchangeRates[currency1]));
    setMoney1(money1);
  }

  function handleCurrency1Change(currency1) {
    setMoney2(format(money1 * exchangeRates[currency2] / exchangeRates[currency1]));
    setCurrency1(currency1);
  }

  function handleMoney2Change(money2) {
    setMoney1(format(money2 * exchangeRates[currency1] / exchangeRates[currency2]));
    setMoney2(money2);
  }

  function handleCurrency2Change(currency2) {
    setMoney1(format(money2 * exchangeRates[currency1] / exchangeRates[currency2]));
    setCurrency2(currency2);
  }


  return (
    <div>
      <h1 className="title">Currency Converter</h1>
      <CurrencyInput
        onMoneyChange={handleMoney1Change}
        onCurrencyChange={handleCurrency1Change}
        exchangeRates={Object.keys(exchangeRates)}
        money={money1}
        currency={currency1} />
      <CurrencyInput
        onMoneyChange={handleMoney2Change}
        onCurrencyChange={handleCurrency2Change}
        exchangeRates={Object.keys(exchangeRates)}
        money={money2}
        currency={currency2} />
    </div>
  );
}

export default ExchangeContainer;