import "./style.css";

const Converter = () => (
    <section class="converter converter--hidden">
        <h2 class="converter__header">Converter</h2>
        <form class="converter__form">
            <p>
                <label for="currencyField">Currency: </label><select id="currencyList"
                    class="converter__select"></select>
            </p>
            <p>
                <input type="number" value="1.00" min="0" pattern="^\d{1,6}(\.\d{1,2})?$" id="valuePLN" class="converter__field" autofocus />
                <label for="valuePLN">PLN</label>
            </p>

            <p>
                <input type="number" value="1.00" min="0" pattern="^\d{1,6}((\.|\,)\d{1,2})?$" id="currencyField" class="converter__field" />
                <label for="currencyField">CODE</label>
            </p>
            <p class="converter__paragraph">
                CODE rate: <span class="converter__rate">Loading Ratio</span>
            </p>

        </form>
    </section>
);

export default Converter;