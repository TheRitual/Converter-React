import "./style.css";

const List = ({savedList}) => {   
        return (
            <section className="list">
                <h2 className="list__header">Saved</h2>
                <ul className="list__savedList">
                    {savedList.map((record, index) => {
                        return(
                            <li key={index} className="list__savedPositions">
                                {record.valPLN}&nbsp;<span className="list__code">PLN</span>&nbsp;➤&nbsp;
                                {record.valCUR}&nbsp;<span className="list__code">{record.code}</span>
                            </li>
                        );
                    } )}
                </ul>         
            </section>);
};

export default List;