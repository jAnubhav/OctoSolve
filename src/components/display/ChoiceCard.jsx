import React, { useContext } from "react";

import VisContext from "../../contexts/VisContext";
import { GridContext } from "../../contexts/GridContext";

const Card = props => {
    const n = props.n, { setDisV, gridsVis } = useContext(VisContext);
    const m = n * n, size = `${n}x${n}`, { setGrid, setBlk } = useContext(GridContext);

    const handleClick = () => {
        setDisV("hidden"); setTimeout(() => gridsVis[n - 3][1](""), 700); setBlk([n - 1, n - 1]);
        setGrid([...Array(n)].map((_, i) => [...Array(n)].map((_, j) => (i * n + j + 1) % m)));
    }

    return (
        <button className="d-flex text-center gap-2 px-4 py-3 bg-dark2 text-light br-10 card my-card" onClick={handleClick}>
            <h5>{props.tag}</h5> <img src={`../../../img/${size}.png`} className="br-10" alt={size} />
            <p className="card-text">A {size} grid featuring {n * n - 1} tiles and a single empty space.</p>
        </button>
    );
};

export default Card;