import "./style.css";

const Converter = (props) => {
    
    const onChangeCurrency = (event) => {
        //I'll repair it when i lear how useEffect works
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
            [{
                valPLN : Number(props.valuePLN).toFixed(2),
                valCUR : Number(props.valueCUR).toFixed(2),
                rate : props.rate,
                code : props.currency,
            }, ...props.savedList]
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
                        <input type="number" step="any" value={Number(props.valuePLN).toString()} onChange={onValuePLNChange} min="0" id="valuePLN" className="converter__field" autoFocus />
                        <label htmlFor="valuePLN" className="converter__code">PLN</label>
                    </p>

                    <p>
                        <input type="number" step="any" value={Number(props.valueCUR).toString()} onChange={onValueCURChange} min="0" id="currencyField" className="converter__field" />
                        <label htmlFor="currencyField" className="converter__code">{props.currency}</label>
                    </p>
                    <p className="converter__paragraph">
                        {props.currency} rate: <span className="converter__rate">{props.rate}</span>
                        <button className="converter__button">Save</button>
                    </p>
                </form>
            </section>);
};

export default Converter;