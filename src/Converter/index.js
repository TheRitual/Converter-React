import "./style.css";
import { useEffect } from "react";

const Converter = ({ valuePLN, valueCUR, setValueCUR, setValuePLN, setRate, rate, setCurrency, getRate, setSavedList, currency, savedList, currencyList }) => {

    const onChangeCurrency = (event) => {
        //I'll repair it when i lear how useEffect works
        setCurrency(event.target.value);
    }

    useEffect(() => {
        setRate(getRate(currency));
        setValueCUR(Number(valuePLN / rate).toFixed(2));
    }, [setRate, currency, getRate, rate, setValueCUR, valuePLN]);

    const onValuePLNChange = (event) => {
        setValuePLN(Number(event.target.value));
        setValueCUR(Number(event.target.value / rate).toFixed(2));
    }

    const onValueCURChange = (event) => {
        setValueCUR(Number(event.target.value));
        setValuePLN(Number(event.target.value * rate).toFixed(2));
    }

    const save = (event) => {
        event.preventDefault();
        console.log("saving position");
        setSavedList(
            [{
                valPLN: Number(valuePLN).toFixed(2),
                valCUR: Number(valueCUR).toFixed(2),
                rate: rate,
                code: currency,
            }, ...savedList]
        );
    }


    return (
        <section className="converter">
            <h2 className="converter__header">Converter</h2>
            <form className="converter__form" onSubmit={save}>
                <p>
                    <label htmlFor="currencyField">Currency: </label>
                    <select onChange={onChangeCurrency} id="currencyList" className="converter__select">
                        {
                            currencyList.map((currency, index) => {
                                return (<option key={index} value={currency.code}>{currency.code}</option>);
                            })
                        }
                    </select>
                </p>
                <p>
                    <input type="number" step="any" value={Number(valuePLN).toString()} onChange={onValuePLNChange} min="0" id="valuePLN" className="converter__field" autoFocus />
                    <label htmlFor="valuePLN" className="converter__code">PLN</label>
                </p>

                <p>
                    <input type="number" step="any" value={Number(valueCUR).toString()} onChange={onValueCURChange} min="0" id="currencyField" className="converter__field" />
                    <label htmlFor="currencyField" className="converter__code">{currency}</label>
                </p>
                <p className="converter__paragraph">
                    {currency} rate: <span className="converter__rate">{rate}</span>
                    <button className="converter__button">Save</button>
                </p>
            </form>
        </section>);
};

export default Converter;