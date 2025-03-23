import { useEffect, useState } from "react";

function DigitalCLock() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        document.title = "Digital Clock"
    }, []);


    useEffect(() => {
        const intervals = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => {
            clearInterval(intervals)
        }
    }, [])

    function formatTime() {
        let hours = time.getHours();
        const min = time.getMinutes();
        const sec = time.getSeconds();
        const mer = hours > 12 ? "PM" : "AM";
        hours %= 12 || 12;
        return `${pad(hours)}:${pad(min)}:${pad(sec)} ${mer}`;

    }

    function pad(n) {
        return (n < 10 ? "0" : "") + n;
    }

    return (<div className="clock-window">
        <span className="clock">{formatTime()}</span>
    </div>);

}

export default DigitalCLock