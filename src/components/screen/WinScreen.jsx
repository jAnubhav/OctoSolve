import React, { useContext } from "react";

import VisContext from "../../contexts/VisContext";

import "./css/WinScreen.css";

const WinScreen = () => {
    const { setDisV, gridsVis, size, setSize, setWinV, setUp } = useContext(VisContext);

    const playAgain = () => { setWinV("hidden"); setTimeout(() => setDisV(""), 700); }

    return (
        <section className="px-5 py-4 bg-dark1 br-10">
            <p className="text-center text-light win-tag">You Win</p>

            <div className="px-3 text-light text-box">
                <p>Score: Coming Soon...</p>
                <p>Time: Coming Soon...</p>
            </div>

            <div className="p-3">
                <button className="w-100 p-2 btn my-btn br-10"
                    onClick={playAgain}>Play Again</button>
            </div>
        </section>
    );
};

export default WinScreen;