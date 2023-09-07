import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { increaseCounter, decreaseCounter } from "../../redux/counterSlice";
import './supportUs.css'
function SupportUs() {
    /// access global state
    const counter = useSelector((state) => state.counterReducer.counter);
    const dispatch = useDispatch();
    const increase = () => {
        dispatch(increaseCounter(1));
    };

    const decrease = () => {
        dispatch(decreaseCounter(1));
    };

    return (
        <div id='one'>
            <div>
                <h2 className="header ">Support Us</h2>
            </div>

            <div className="container text-center  mt-5   ">
                <h2>{counter}</h2>
                <button
                    type="button"
                    onClick={increase}
                    class="btn btn-primary m-3 pt-2 px-5"
                >
                    ++
                </button>
                <button
                    type="button"
                    onClick={decrease}
                    class="btn btn-secondary m-3 pt-2 px-5"
                >
                    --
                </button>
            </div>
            <br />
            <br />
            <h2 id='two'>Thank you for donating</h2>
        </div>
    );
}

export default SupportUs;
