import { useEffect, useState } from "react";

export const useDate = () => {
    const [time, setTime] = useState(new Date().toISOString());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date().toISOString());
        }, 100);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return time;
}