import "./style.css";

const List = ({savedList}) => {   
        return (
            <section className="list">
                <h2 className="converter__header">Saved</h2>
                <ul>
                    {savedList.map((record, index) => {
                        return <li key={index}>{record.valPLN}</li>;
                    } )}
                </ul>         
            </section>);
};

export default List;