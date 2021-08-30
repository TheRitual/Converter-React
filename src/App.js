import { useState, useEffect, useCallback } from "react";
import Converter from "./Converter";
import Header from "./Header";
import List from "./List";
import "./App.css";


function App() {

  const [currencyList, setCurrencyList] = useState([{ currency: "LOADING", code: "USD", bid: 6.66, ask: 6.66 }]);
  const [dataReceived, setDataReceived] = useState(false);
  const [savedList, setSavedList] = useState([]);
  const [rate, setRate] = useState(3.8551);
  const [currency, setCurrency] = useState("USD");
  const [valuePLN, setValuePLN] = useState(1.00);
  const [valueCUR, setValueCUR] = useState(1.00);

  const getBid = (currency = "USD") => currencyList.filter(cur => cur.code === currency)[0].bid;

  useEffect(() => {
    if (localStorage.getItem("savedList")) {
      setSavedList(JSON.parse(localStorage.getItem("savedList")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedList", JSON.stringify(savedList));
  }, [savedList]);

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
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

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
          getBid={getBid}
          currencyList={currencyList}
          setRate={setRate}
          rate={rate}
          savedList={savedList}
          setSavedList={setSavedList}
        />
        <List savedList={savedList} setSavedList={setSavedList} />
      </div>
    </main>
  );
}

export default App;
