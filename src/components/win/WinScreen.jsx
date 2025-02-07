import React, { useContext } from "react";

import { VisContext } from "../../contexts/VisContext";
import { GridContext } from "../../contexts/GridContext"

import "./css/WinScreen.css";

const WinScreen = () => {
    const { setDisV, winV, setWinV } = useContext(VisContext);
    const { setDim } = useContext(GridContext);

    const playAgain = () => {
        setWinV("hidden"); setDim(-1); setTimeout(() => setDisV(""), 700);
    }

    return (
        <section className={`d-flex jc-cen bg-dark2 screen ${winV}`}>
            <section className="px-5 py-4 bg-dark1 br-10">
                <p className="text-center text-light win-tag">You Win</p>

                <div className="px-3 text-light text-box">
                    <p>Score: Coming Soon...</p>
                    <p>Time: Coming Soon...</p>
                </div>

                <div className="py-3">
                    <button className="w-100 p-2 btn my-btn br-10"
                        onClick={playAgain}>Play Again</button>
                </div>
            </section>
        </section>
    );
};

export default WinScreen;