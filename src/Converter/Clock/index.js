import { useDate } from "./useDate";
import { ClockBar, ClockInformation } from "./styled";

const Clock = () => {
    const time = useDate();
    return (
        <section className="clock">
            <ClockInformation>
                {new Date(time).toLocaleString(undefined, {
                    month: "long",
                    weekday: "long",
                    day: "numeric",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                })}
            </ClockInformation>
            <ClockBar value={new Date(time).getMilliseconds() + new Date(time).getSeconds() * 1000} max="60000"/>
        </section>
    );
}

export default Clock;