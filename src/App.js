import Converter from "./Converter";
import Header from "./Header";
import List from "./List";
import "./App.css";
import { useFetchData } from "./utils/useFetchData";
import { useConverterStates } from "./utils/useConverterStates"

function App() {
  const states = useConverterStates();
  useFetchData(states);
  const getBid = (currency = "USD") => states.currencyList.filter(cur => cur.code === currency)[0].bid;

  return (
    <main>
      <Header />
      <div className="box">
        <Converter
          setCurrency={states.setCurrency}
          currency={states.currency}
          valuePLN={states.valuePLN}
          setValuePLN={states.setValuePLN}
          valueCUR={states.valueCUR}
          setValueCUR={states.setValueCUR}
          getBid={getBid}
          currencyList={states.currencyList}
          setRate={states.setRate}
          rate={states.rate}
          savedList={states.savedList}
          setSavedList={states.setSavedList}
        />
        <List savedList={states.savedList} setSavedList={states.setSavedList} />
      </div>
    </main>
  );
}

export default App;
