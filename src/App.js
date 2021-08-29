import { useState, useEffect, useCallback } from "react";
import Converter from "./Converter";
import Header from "./Header";
import List from "./List";
import "./App.css";


function App() {

  const [currencyList, setCurrencyList] = useState([{ currency: "loading", code: "LOADING", bid: 6.66, ask: 6.66 }]);
  const [dataReceived, setDataReceived] = useState(false);
  const [savedList, setSavedList] = useState([]);
  const [rate, setRate] = useState(3.8551);
  const [currency, setCurrency] = useState("LOADING");
  const [valuePLN, setValuePLN] = useState(1.00);
  const [valueCUR, setValueCUR] = useState(1.00);

  const getRate = (currency = "USD") => currencyList.filter(cur => cur.code === currency)[0].bid;

  const fetchData = useCallback(async () => {
    if (!dataReceived) {
      console.log("Connecting to NBP");
      try {
        const response = await fetch("https://api.nbp.pl/api/exchangerates/tables/C/?format=json");
        const jsonData = await response.json();
        console.log("Response received");
        setDataReceived(true);
        setCurrencyList(jsonData[0].rates);
        setCurrency(jsonData[0].rates[0].code);
        setRate(jsonData[0].rates[0].bid);
        setValuePLN(Number(rate).toFixed(2));
      } catch (error) {
        console.log("Can't connect to NBP");
        console.log(error);
      }
    } else {
      return null;
    }
  }
    , [rate, dataReceived]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <main>
      <Header />
      <div className="box">
        <Converter
          setCurrency={setCurrency}
          currency={currency}
          valuePLN={valuePLN}
          setValuePLN={setValuePLN}
          valueCUR={valueCUR}
          setValueCUR={setValueCUR}
          getRate={getRate}
          currencyList={currencyList}
          setRate={setRate}
          rate={rate}
          savedList={savedList}
          setSavedList={setSavedList}
        />
        <List savedList={savedList} setSavedList={setSavedList}/>
      </div>
    </main>
  );
}

export default App;
