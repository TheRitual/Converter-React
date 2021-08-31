import { useEffect } from "react";

export const useConverterFunctions = (states, getBid) => {
    const onChangeCurrency = (event) => {
        states.setCurrency(event.target.value);
    }

    useEffect(() => {
        states.setRate(getBid(states.currency));
        states.setValueCUR(Number(states.valuePLN / states.rate).toFixed(2));
        // eslint-disable-next-line
    }, [states.currency, states.rate]);

    const onValuePLNChange = (event) => {
        states.setValueCUR(Number(event.target.value / states.rate).toFixed(2));
        states.setValuePLN(Number(event.target.value));
    }

    const onValueCURChange = (event) => {
        states.setValueCUR(Number(event.target.value));
        states.setValuePLN(Number(event.target.value * states.rate).toFixed(2));
    }

    const save = (event) => {
        event.preventDefault();

        states.setSavedList(
            [{
                valPLN: Number(states.valuePLN).toFixed(2),
                valCUR: Number(states.valueCUR).toFixed(2),
                id: states.savedList.length ? states.savedList[0].id + 1 : 0,
                code: states.currency,
                rate: states.rate,
                date: new Date().toISOString(),
            }, ...states.savedList]
        );
    }

    return { onChangeCurrency, onValuePLNChange, onValueCURChange, save };
}