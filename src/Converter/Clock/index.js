import "./style.css"
import { useDate } from "./useDate";

const Clock = () => {
    const time = useDate();
    return (
        <section className="clock">
            <div className="clock__information">
                {new Date(time).toLocaleString(undefined, {
                    month: "long",
                    weekday: "long",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                })}
            </div>
            <progress value={new Date(time).getMilliseconds() + new Date(time).getSeconds() * 1000} max="60000" className="clock__bar" />
        </section>
    );
}

export default Clock;