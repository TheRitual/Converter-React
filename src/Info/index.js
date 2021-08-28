import "./style.css";

const Info = () => (
    <section class="info">
        <p class="info__paragraph">Connecting to NBP. Please Wait...</p>
        <p class="info__paragraph info__paragraph--error info__paragraph--hidden">Can't connect to NBP...</p>
    </section>
);

export default Info;