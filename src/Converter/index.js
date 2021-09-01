import "./style.css";
import Clock from "./Clock"
import { useConverterFunctions } from "./useConverterFunctions";

const Converter = ({ states, getBid }) => {

    const { onChangeCurrency, onValuePLNChange, onValueCURChange, save } = useConverterFunctions(states, getBid);

    return (
        <section className="converter">
            <h2 className="converter__header">Converter</h2>
            <Clock />
            <form className="converter__form" onSubmit={save}>
                <p>
                    <label htmlFor="currencyField">Currency: </label>
                    <select onChange={onChangeCurrency} id="currencyList" className="converter__select">
                        {
                            states.currencyList.map((currency, index) => {
                                return (<option key={index} value={currency.code}>{currency.code}</option>);
                            })
                        }
                    </select>
                </p>
                <p>
                    <input type="number" step="any" value={Number(states.valuePLN).toString()} onChange={onValuePLNChange} min="0" id="valuePLN" className="converter__field" autoFocus />
                    <label htmlFor="valuePLN" className="converter__code">PLN</label>
                </p>

                <p>
                    <input type="number" step="any" value={Number(states.valueCUR).toString()} onChange={onValueCURChange} min="0" id="currencyField" className="converter__field" />
                    <label htmlFor="currencyField" className="converter__code">{states.currency}</label>
                </p>
                <p className="converter__paragraph">
                    {states.currency} rate: <span className="converter__rate">{states.rate}</span>
                    <button className="converter__button">Save</button>
                </p>
            </form>
        </section>);
};

export default Converter;