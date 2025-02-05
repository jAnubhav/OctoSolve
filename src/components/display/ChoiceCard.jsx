import React, { useContext, useEffect } from "react";

import VisContext from "../../contexts/VisContext";
import { GridContext } from "../../contexts/GridContext";

const Card = props => {
    const { setDisV, gridsVis } = useContext(VisContext), { setGrid, setBlk } = useContext(GridContext);

    const n = props.n, m = n * n, size = `${n}x${n}`, y = [1, -1, 0, 0], x = [0, 0, 1, -1];

    const handleClick = () => {
        let r = n - 1, c = n - 1; const grid = [...Array(n)].map(
            (_, i) => [...Array(n)].map((_, j) => (i * n + j + 1) % m));

        for (let k = 0; k < 50; k++) {
            const val = Math.floor(Math.random() * 4), i = r + y[val], j = c + x[val];

            if (0 <= i && i < n && 0 <= j && j < n) {
                grid[r][c] = grid[i][j]; grid[i][j] = 0; r = i; c = j;
            }
        }

        setDisV("hidden"); setBlk([r, c]); setGrid(grid); setTimeout(() => gridsVis[n - 3][1](""), 1000);
    }

    return (
        <button className="d-flex text-center gap-2 px-4 py-3 bg-dark2 text-light br-10 card my-card" onClick={handleClick}>
            <h5>{props.tag}</h5> <img src={`../../../img/${size}.png`} className="br-10" alt={size} />
            <p className="card-text">A {size} grid featuring {n * n - 1} tiles and a single empty space.</p>
        </button>
    );
};

export default Card;