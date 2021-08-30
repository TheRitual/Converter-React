import "./style.css";

const List = ({ savedList, setSavedList }) => {
    const removeItem = (id) => {
        setSavedList(savedList => savedList.filter(record => record.id !== id));
    }

    const clearList = () => {
        setSavedList([]);
    }

    return (
        <section className="list">
            <h2 className="list__header">Saved</h2>
            {savedList.length > 0 ? <button className="list__clearListButton" onClick={clearList} >Clear All</button> : ""}
            <ul className="list__savedList">
                {savedList.map((record) => {
                    return (
                        <li key={record.id} className="list__savedPositions" title={(Date(record.date) + " rate: " + record.rate)}>
                            <div className="list_positionElement">
                                <span className="list__value">{record.valPLN}</span>&nbsp;
                                <span className="list__code">PLN</span>&nbsp;
                            </div>
                            <div className="list_positionElement">
                                &nbsp;➤&nbsp;
                            </div>
                            <div className="list_positionElement">
                                <span className="list__value">{record.valCUR}</span>&nbsp;
                                <span className="list__code">{record.code}</span>&nbsp;
                            </div>
                            <div className="list_positionElement">
                                <button className="list__removeButton" onClick={() => removeItem(record.id)} >&#10006;</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>);
};

export default List;