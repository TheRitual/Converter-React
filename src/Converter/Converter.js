import "./style.css";

const Converter = () => (
    <section className="converter converter--hidden">
        <h2 className="converter__header">Converter</h2>
        <form className="converter__form">
            <p>
                <label for="currencyField">Currency: </label><select id="currencyList"
                    className="converter__select"></select>
            </p>
            <p>
                <input type="number" value="1.00" min="0" pattern="^\d{1,6}(\.\d{1,2})?$" id="valuePLN" className="converter__field" autofocus />
                <label for="valuePLN">PLN</label>
            </p>

            <p>
                <input type="number" value="1.00" min="0" pattern="^\d{1,6}((\.|\,)\d{1,2})?$" id="currencyField" className="converter__field" />
                <label for="currencyField">CODE</label>
            </p>
            <p className="converter__paragraph">
                CODE rate: <span className="converter__rate">Loading Ratio</span>
            </p>

        </form>
    </section>
);

export default Converter;