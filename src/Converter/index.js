import "./style.css";

const Converter = ({data}) => {
    
    const onChangeCurrency = (event) => {
        data.setCurrency(event.target.value);
        data.setRate(data.getRate(event.target.value));
        data.setValueCUR(Number(data.valuePLN / data.getRate(event.target.value)).toFixed(2));
    }

    const onValuePLNChange = (event) => {
        data.setValuePLN(Number(event.target.value));
        data.setValueCUR(Number(event.target.value / data.rate).toFixed(2));
    }

    const onValueCURChange = (event) => {
        data.setValueCUR(Number(event.target.value));
        data.setValuePLN(Number(event.target.value * data.rate).toFixed(2));
    }

    const save = (event) => {
        event.preventDefault();
        console.log("saving position");
    }

   
        return (
            <section className="converter">
                <h2 className="converter__header">Converter</h2>
                <form className="converter__form" onSubmit={save}>
                    <p>
                        <label htmlFor="currencyField">Currency: </label>
                        <select onChange={onChangeCurrency} id="currencyList" className="converter__select">
                            {
                                data.currencyList.map((currency, index) => {
                                    return (<option key={index} value={currency.code}>{currency.code}</option>);
                                })
                            }
                        </select>
                    </p>
                    <p>
                        <input type="number" step="0.01" value={data.valuePLN} onChange={onValuePLNChange} min="0" id="valuePLN" className="converter__field" autoFocus />
                        <label htmlFor="valuePLN">PLN</label>
                    </p>

                    <p>
                        <input type="number" step="0.01" value={data.valueCUR} onChange={onValueCURChange} min="0" id="currencyField" className="converter__field" />
                        <label htmlFor="currencyField">{data.currency}</label>
                    </p>
                    <p className="converter__paragraph">
                        {data.currency} rate: <span className="converter__rate">{data.rate}</span>
                        <button className="converter__button">Save</button>
                    </p>
                </form>
            </section>);
};

export default Converter;