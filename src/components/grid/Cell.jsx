import React, { useContext, useEffect } from "react";

import { VisContext } from "../../contexts/VisContext";
import { GridContext } from "../../contexts/GridContext";

import { validateGrid, find } from "../../utility";

const Cell = props => {
    const n = props.n, { gridsV, setWinV } = useContext(VisContext);
    const { blk, setBlk, grid, setGrid, dim } = useContext(GridContext);

    const [state, setState] = props.state, dis = props.dis, val = props.value;

    const update = (r, c) => setState({ top: r * dis, left: c * dis });

    const clicked = () => {
        let [i, j] = find(n, grid, val), [r, c] = blk;

        if (Math.abs(r - i) + Math.abs(c - j) == 1) {
            update(r, c); grid[r][c] = grid[i][j]; grid[i][j] = 0; setBlk([i, j]); setGrid(grid);
        }

        if (validateGrid(n, grid)) {
            setTimeout(() => gridsV[dim - 3][1]("hidden"), 700); setTimeout(() => setWinV(""), 1500);
        }
    }

    useEffect(() => { if (dim == n) { const [i, j] = find(n, grid, val); update(i, j); } }, [dim]);

    return (
        <button className="d-flex jc-cen text-dark border-0 br-10 cell" onClick={clicked}
            style={{ ...props.style, ...state }}>{props.value}</button>
    );
};

export default Cell;