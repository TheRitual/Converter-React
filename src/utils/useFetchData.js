import { useCallback, useState, useEffect } from "react";

export const useFetchData = (states) => {
    const [dataReceived, setDataReceived] = useState(false);

    const fetchData = useCallback(async () => {
        if (!dataReceived) {
            console.info("Connecting to NBP");
            try {
                const response = await fetch("https://api.nbp.pl/api/exchangerates/tables/C/?format=json");
                const jsonData = await response.json();
                console.info("Response received");
                setDataReceived(true);
                states.setCurrencyList(jsonData[0].rates);
                states.setCurrency(jsonData[0].rates[0].code);
                states.setRate(jsonData[0].rates[0].bid);
                states.setValuePLN(Number(states.rate).toFixed(2));
            } catch (error) {
                console.error("Can't connect to NBP");
                console.error(error);
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
}