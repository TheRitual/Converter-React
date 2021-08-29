import { useState, useEffect } from "react";
import Converter from "./Converter/Converter";
import Header from "./Header";
import List from "./List";


function App() {

  const [currencyList, setCurrencyList] = useState([{ currency: "loading", code: "LOADING", bid: 6.66, ask: 6.66 }]);
  const [rate, setRate] = useState(3.8551);
  const [currency, setCurrency] = useState("LOADING");
  const [valuePLN, setValuePLN] = useState("1.00");
  const [valueCUR, setValueCUR] = useState("1.00");

  const getRate = (currency = "USD") => currencyList.filter(cur => cur.code === currency)[0].bid;

  const dataObject = { currency, setCurrency, valuePLN, setValuePLN, valueCUR, setValueCUR, rate, setRate, currencyList, setCurrencyList, getRate };

  const fetchData = () => {
    return fetch("https://api.nbp.pl/api/exchangerates/tables/C/?format=json")
      .then((response) => response.json())
      .then((jsonData) => {
        setCurrencyList(jsonData[0].rates);
        setCurrency(jsonData[0].rates[0].code);
        setRate(jsonData[0].rates[0].bid);
        setValueCUR(rate);
      })
      .catch((error) => { console.log(error); });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <Header />
      <Converter data={dataObject} />
      <List />
    </main>
  );
}

export default App;
