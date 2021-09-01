import Converter from "./Converter";
import Header from "./Header";
import List from "./List";
import { useFetchData } from "./utils/useFetchData";
import { useConverterStates } from "./utils/useConverterStates"
import { Box } from "./styled";

function App() {
  const states = useConverterStates();
  useFetchData(states);
  const getBid = (currency = "USD") => states.currencyList.filter(cur => cur.code === currency)[0].bid;

  return (
    <main>
      <Header />
      <Box>
        <Converter states={states} getBid={getBid}/>
        <List savedList={states.savedList} setSavedList={states.setSavedList} />
      </Box>
    </main>
  );
}

export default App;
