import "./style.css";

const Converter = ({data}) => {
    
    const onChangeCurrency = (event) => {
        data.setCurrency(event.target.value);
        data.setRate(data.getRate(event.target.value));
        data.setValueCUR(Number(data.valuePLN / data.rate).toFixed(2));
    }

    const onValuePLNChange = (event) => {
        event.preventDefault();
        data.setValuePLN(Number(event.target.value).toFixed(2));
        data.setValueCUR(Number(data.valuePLN / data.rate).toFixed(2));
    }

    const onValueCURChange = (event) => {
        data.setValueCUR(Number(event.target.value).toFixed(2));
        data.setValuePLN(Number(data.valueCUR * data.rate).toFixed(2));
    }

   
        return (
            <section className="converter">
                <h2 className="converter__header">Converter</h2>
                <form className="converter__form" onSubmit={onValuePLNChange}>
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
                        <input type="number" value={data.valuePLN} onChange={onValuePLNChange} min="0" pattern="^\d{1,6}(\.\d{1,2})?$" id="valuePLN" className="converter__field" autoFocus />
                        <label htmlFor="valuePLN">PLN</label>
                    </p>

                    <p>
                        <input type="number" value={data.valueCUR} onChange={onValueCURChange} min="0" pattern="^\d{1,6}((\.|\,)\d{1,2})?$" id="currencyField" className="converter__field" />
                        <label htmlFor="currencyField">{data.currency}</label>
                    </p>
                    <p className="converter__paragraph">
                        {data.currency} rate: <span className="converter__rate">{data.rate}</span>
                    </p>
                </form>
            </section>);
};

export default Converter;