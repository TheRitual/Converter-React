import "./style.css";

const Info = ({ showError, showLoading }) => {
    if (showError || showLoading) {
        return (
            <section className="info">
                {showLoading ? <p className="info__paragraph">Connecting to NBP. Please Wait...</p> : ""}
                {showError ? <p className="info__paragraph info__paragraph--error">Can't connect to NBP...</p> : ""}
            </section>
        );
    }
    return "";
};

export default Info;