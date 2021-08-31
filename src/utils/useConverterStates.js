import { useState } from "react";
import { useLocalStorageState } from "./useLocalStorageState";

export const useConverterStates = () => {
  const [savedList, setSavedList] = useLocalStorageState("savedList", []);
  const [currencyList, setCurrencyList] = useState([{ currency: "LOADING", code: "USD", bid: 6.66, ask: 6.66 }]);
  const [rate, setRate] = useState(3.8551);
  const [currency, setCurrency] = useState("USD");
  const [valuePLN, setValuePLN] = useState(1.00);
  const [valueCUR, setValueCUR] = useState(1.00);
  const states = { currencyList, setCurrencyList, rate, setRate, currency, setCurrency, valuePLN, setValuePLN, valueCUR, setValueCUR, savedList, setSavedList };
  return states;
}