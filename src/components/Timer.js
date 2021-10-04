import React, { useEffect, useState } from "react";
//functions
import { randomWord } from "../helper/functions";
//components
import Result from "./Result";

const Timer = () => {
    //states
    const [randWord, setRandWord] = useState();
    const [status, setStatus] = useState();
    const [time, setTime] = useState({
        min: 0,
        sec: 0,
        msec: 0,
    });
    const [timer, setTimer] = useState(0);
    const [result, setResult] = useState(false);
    //mounting
    useEffect(() => {
        setRandWord(randomWord());
    }, []);
    //changeHandler
    const changeHandler = (e) => {
        if (e.target.value === randWord) {
            clearInterval(timer);
            setResult(true);
        }
        if (randWord.includes(e.target.value)) {
            setStatus("نزدیکی");
        } else {
            setStatus("دور شدی");
        }
    };
    //focousHandler
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
                <div className="col-10 col-md-6">
                    <span className="mb-3 display-6 d-block text-end">
                        متن آزمایشی
                    </span>
                    <p className="bg-light p-3 fs-5 rounded">{randWord}</p>
                </div>
            </div>
            <div className="row w-100 justify-content-center">
                <div className="col-10 col-md-6">
                    <textarea
                        className="form-control"
                        onFocus={focousHandler}
                        onChange={changeHandler}
                        rows="10"
                    ></textarea>
                </div>
            </div>
            <div className="row w-100 justify-content-center">
                <div className="col-10 col-md-6">
                    <h3 className="bg-secondary">
                        <span className="badge">{status}</span>
                    </h3>
                </div>
            </div>
            <div className="row w-100 justify-content-center">
                <div className="col-6 col-md-3">
                    <p className="text-success fs-4 fw-bolder">{`${time.min}:${time.sec}:${time.msec}`}</p>
                </div>

                <form className="col-6 col-md-3">
                    <button className="btn btn-primary w-100" type="submit">
                        از نو
                    </button>
                </form>
            </div>
            {result && <Result time={time} />}
        </div>
    );
};

export default Timer;
