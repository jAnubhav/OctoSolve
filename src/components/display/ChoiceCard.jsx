import React, { useContext } from "react";

import VisContext from "../../contexts/VisContext";
import { GridContext } from "../../contexts/GridContext";

const Card = props => {
    const n = props.n, { setDisV, setGridV } = useContext(VisContext);
    const size = `${n}x${n}`, { setN } = useContext(GridContext);

    const handleClick = () => { setDisV("hidden"); setTimeout(() => setGridV(""), 1000); setN(n); }

    return (
        <button className="d-flex text-center gap-2 px-4 py-3 bg-dark2 text-light br-10 card my-card" onClick={handleClick}>
            <h5>{props.tag}</h5> <img src={`../../../img/${size}.png`} className="br-10" alt={size} />
            <p className="card-text">A {size} grid featuring {n * n - 1} tiles and a single empty space.</p>
        </button>
    );
};

export default Card;