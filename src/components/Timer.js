import React, { useEffect, useState } from "react";
const words = [
    "Lorem ipsum dolor sit amet consectetur. 1",
    "Lorem ipsum dolor sit amet consectetur.2",
    "Lorem ipsum dolor sit amet consectetur.3",
    "Lorem ipsum dolor sit amet consectetur.4",
    "Lorem ipsum dolor sit amet consectetur.5",
];
const randomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
};
const Timer = () => {
    const [randWord, setRandWord] = useState();
    const [status, setStatus] = useState();
    const [time, setTime] = useState({
        min: 0,
        sec: 0,
        msec: 0,
    });
    const [timer, setTimer] = useState(0);
    const [data, setData] = useState(false);
    useEffect(() => {
        setRandWord(randomWord());
    }, []);
    const changeHandler = (e) => {
        if (e.target.value === randWord) {
            clearInterval(timer);
            setData(true);
            console.log(data);
        }
        if (randWord.includes(e.target.value)) {
            setStatus("نزدیکی");
        } else {
            setStatus("دور شدی");
        }
    };
    const startAgain = () => {};
    const focousHandler = () => {
        console.log("message");
        setTimer(
            setInterval(() => {
                setTime({ ...time }, time.msec++);
                if (time.msec > 99) {
                    setTime({ ...time }, (time.msec = 0), time.sec++);
                }
                if (time.sec > 59) {
                    setTime({ ...time }, (time.sec = 0), time.min++);
                }
            }, 10)
        );
    };
    return (
        <div className="container min-vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className="row justify-content-center w-100">
                <div className="col-6">
                    <span className="mb-3 display-6 d-block text-end">
                        متن آزمایشی
                    </span>
                    <p className="bg-light p-3 fs-5 rounded">{randWord}</p>
                </div>
            </div>
            <div className="row w-100 justify-content-center">
                <div className="col-6">
                    <textarea
                        className="form-control"
                        onFocus={focousHandler}
                        onChange={changeHandler}
                        rows="10"
                    ></textarea>
                </div>
            </div>
            <div className="row w-100 justify-content-center">
                <div className="col-6">
                    <h3 className="bg-secondary">
                        <span className="badge">{status}</span>
                    </h3>
                </div>
            </div>
            <div className="row w-100 justify-content-center">
                <div className="col-3">
                    <p className="text-success fs-4 fw-bolder">{`${time.min}:${time.sec}:${time.msec}`}</p>
                </div>

                <form className="col-3">
                    <button
                        className="btn btn-primary w-100"
                        type="submit"
                        onClick={startAgain}
                    >
                        از نو
                    </button>
                </form>
            </div>
            {data && (
                <div className="min-vw-100 min-vh-100 position-absolute row justify-content-center align-content-center align-items-center bg-light">
                    <div className="col-6">
                        <div className=" d-block">
                            <p className="fs-5 bg-secondary p-4 rounded">
                                سرعت تایپ شما
                                <span className="fs-5 fw-bold text-info">
                                    {" "}
                                    {`${time.min}:${time.sec}:${time.msec}`}
                                </span>{" "}
                                می باشد. برای ادامه روی دکمه زیر کلیک کنید.
                            </p>
                        </div>
                        <form className=" d-block">
                            <button
                                className="btn btn-primary w-100 btn-lg"
                                type="submit"
                            >
                                از نو
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Timer;
