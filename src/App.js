import { useState } from "react";
import Converter from "./Converter/Converter";
import Header from "./Header";
import Info from "./Info";


function App() {

  const [showError, setShowError] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [currencyList, setCurrencyList] = useState([]);

  const fetchData = () => {
    return fetch("https://api.nbp.pl/api/exchangerates/tables/C/?format=json")
      .then((response) => response.json())
      .catch((error) => {
        setShowError(true);
        console.log(error);
      });
  }

  const runApp = (data) => {
    const currencyTable = [];
    data[0].rates.forEach((element) => {
      currencyTable.push({ code: element.code, bid: element.bid });
    });
    setCurrencyList(currencyTable);
    setShowLoading(false);
    console.log(currencyList);
  }

  if(currencyList.length === 0) {
    fetchData().then(runApp);
  }
  
    
  


  return (
    <main>
      <Header />
      <Info showError={showError} showLoading={showLoading} />
      <Converter />
    </main>
  );
}

export default App;
