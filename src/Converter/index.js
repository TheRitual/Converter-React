import { ConverterButton, ConverterCode, ConverterField, ConverterHeader, ConverterSection, ConverterSelect, StyledConverter } from "./styled";
import Clock from "./Clock"
import { useConverterFunctions } from "./useConverterFunctions";

const Converter = ({ states, getBid }) => {

    const { onChangeCurrency, onValuePLNChange, onValueCURChange, save } = useConverterFunctions(states, getBid);

    return (
        <StyledConverter>
            <ConverterHeader>Converter</ConverterHeader>
            <Clock />
            <form onSubmit={save}>
                <ConverterSection>
                    <label htmlFor="currencyList">Currency: </label>
                    <ConverterSelect onChange={onChangeCurrency} id="currencyList">
                        {
                            states.currencyList.map((currency, index) => {
                                return (<option key={index} value={currency.code}>{currency.code}</option>);
                            })
                        }
                    </ConverterSelect>
                </ConverterSection>
                
                <ConverterSection>
                    <ConverterField type="number" step="any" value={Number(states.valuePLN).toString()} onChange={onValuePLNChange} min="0" id="valuePLN" autoFocus />
                    <ConverterCode htmlFor="valuePLN">PLN</ConverterCode>
                </ConverterSection>

                <ConverterSection>
                    <ConverterField type="number" step="any" value={Number(states.valueCUR).toString()} onChange={onValueCURChange} min="0" id="currencyField" />
                    <ConverterCode htmlFor="currencyField">{states.currency}</ConverterCode>
                </ConverterSection>
                
                <ConverterSection>
                    {states.currency} rate: {states.rate}
                    <ConverterButton>Save</ConverterButton>
                </ConverterSection>
            </form>
        </StyledConverter>);
};

export default Converter;