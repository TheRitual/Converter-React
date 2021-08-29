import { useState, useEffect } from "react";
import Converter from "./Converter/Converter";
import Header from "./Header";


function App() {

  const [currencyList, setCurrencyList] = useState([{ currency: "dolar amerykański", code: "USD", bid: 3.8551, ask: 3.9329 }]);
  const [rate, setRate] = useState(3.8551);
  const [currency, setCurrency] = useState("USD");
  const [valuePLN, setValuePLN] = useState("1.00");
  const [valueCUR, setValueCUR] = useState("1.00");
  const getRate = (currency = "USD") => currencyList.filter(cur => cur.code === currency)[0].bid;
  const dataObject = { currency, setCurrency, valuePLN, setValuePLN, valueCUR, setValueCUR, rate, setRate, currencyList, setCurrencyList, getRate };
  const fetchData = () => {
    return fetch("https://api.nbp.pl/api/exchangerates/tables/C/?format=json")
      .then((response) => response.json())
      .then((jsonData) => {
        setCurrencyList(jsonData[0].rates);
      })
      .catch((error) => { console.log(error); });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <Header />
      {<Converter data={dataObject} />}
    </main>
  );
}

export default App;
