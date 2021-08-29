import "./style.css";

const Converter = (props) => {
    
    const onChangeCurrency = (event) => {
        props.setCurrency(event.target.value);
        props.setRate(props.getRate(event.target.value));
        props.setValueCUR(Number(props.valuePLN / props.rate).toFixed(2));
    }

    const onValuePLNChange = (event) => {
        props.setValuePLN(Number(event.target.value));
        props.setValueCUR(Number(event.target.value / props.rate).toFixed(2));
    }

    const onValueCURChange = (event) => {
        props.setValueCUR(Number(event.target.value));
        props.setValuePLN(Number(event.target.value * props.rate).toFixed(2));
    }

    const save = (event) => {
        event.preventDefault();
        console.log("saving position");
        props.setSavedList(
            [...props.savedList, {
                valPLN : props.valuePLN,
                valCUR : props.valueCUR,
                rate : props.rate,
                code : props.currency,
            }]
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
                                props.currencyList.map((currency, index) => {
                                    return (<option key={index} value={currency.code}>{currency.code}</option>);
                                })
                            }
                        </select>
                    </p>
                    <p>
                        <input type="number" step="0.01" value={Number(props.valuePLN).toString()} onChange={onValuePLNChange} min="0" id="valuePLN" className="converter__field" autoFocus />
                        <label htmlFor="valuePLN">PLN</label>
                    </p>

                    <p>
                        <input type="number" step="0.01" value={Number(props.valueCUR).toString()} onChange={onValueCURChange} min="0" id="currencyField" className="converter__field" />
                        <label htmlFor="currencyField">{props.currency}</label>
                    </p>
                    <p className="converter__paragraph">
                        {props.currency} rate: <span className="converter__rate">{props.rate}</span>
                        <button className="converter__button">Save</button>
                    </p>
                </form>
            </section>);
};

export default Converter;