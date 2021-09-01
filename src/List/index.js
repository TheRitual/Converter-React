import { ClearButton, ListHeader, ListValue, SavedList, SavedPosition, StyledList, ListCode, RemoveButton} from "./styled";

const List = ({ savedList, setSavedList }) => {
    const removeItem = (id) => {
        setSavedList(savedList => savedList.filter(record => record.id !== id));
    }

    const clearList = () => {
        setSavedList([]);
    }

    return (
        <StyledList>
            <ListHeader>Saved</ListHeader>
            {savedList.length > 0 ? <ClearButton onClick={clearList} >Clear All</ClearButton> : ""}
            <SavedList>
                {savedList.map((record) => {
                    return (
                        <SavedPosition key={record.id} title={(Date(record.date) + " rate: " + record.rate)}>
                            <div>
                                <ListValue>{record.valPLN}</ListValue>&nbsp;
                                <ListCode>PLN</ListCode>&nbsp;
                            </div>
                            <div>
                                &nbsp;➤&nbsp;
                            </div>
                            <div>
                                <ListValue>{record.valCUR}</ListValue>&nbsp;
                                <ListCode>{record.code}</ListCode>&nbsp;
                            </div>
                            <div>
                                <RemoveButton onClick={() => removeItem(record.id)} >&#10006;</RemoveButton>
                            </div>
                        </SavedPosition>
                    );
                })}
            </SavedList>
        </StyledList>);
};

export default List;