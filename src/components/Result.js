
import React from 'react';

const Result = (props) => {
    const {min, sec, msec} = props.time;
    return (
        <div className="min-vw-100 min-vh-100 position-absolute row justify-content-center align-content-center align-items-center bg-light">
                    <div className="col-10 col-md-6">
                        <div className=" d-block">
                            <p className="fs-5 bg-secondary p-4 rounded">
                                سرعت تایپ شما
                                <span className="fs-5 fw-bold text-info">
                                    {" "}
                                    {`${min}:${sec}:${msec}`}
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
    );
};

export default Result;