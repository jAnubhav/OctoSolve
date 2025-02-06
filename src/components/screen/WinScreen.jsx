import React from "react";

import "./css/WinScreen.css";

const WinScreen = () => {
    return (
        <section className="px-5 py-4 bg-dark1 br-10">
            <p className="text-center text-light win-tag">You Win</p>

            <div className="px-3 text-light text-box">
                <p>Score: Coming Soon...</p>
                <p>Time: Coming Soon...</p>
            </div>
        </section>
    );
};

export default WinScreen;