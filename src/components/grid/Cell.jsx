import React, { useContext, useEffect } from "react";

import VisContext from "../../contexts/VisContext";
import { GridContext } from "../../contexts/GridContext";

const Cell = props => {
    const n = props.n, m = n * n, { gridsVis, setWinV, size } = useContext(VisContext);
    const { blk, setBlk, grid, setGrid } = useContext(GridContext);

    const [state, setState] = props.state;

    const find = () => {
        for (let i = 0; i < n; i++) for (let j = 0; j < n; j++)
            if (grid[i][j] == props.value) return [i, j];
    }

    const update = (r, c) => {
        const dis = props.dis; setState({ top: r * dis, left: c * dis });
    }

    const validateGrid = () => {
        for (let i = 0; i < n; i++) for (let j = 0; j < n; j++)
            if ((i * n + j + 1) % m != grid[i][j]) return false; return true;
    }

    const clicked = () => {
        let [i, j] = find(), [r, c] = blk;

        if (Math.abs(r - i) + Math.abs(c - j) == 1) {
            update(r, c); grid[r][c] = grid[i][j]; grid[i][j] = 0; setBlk([i, j]); setGrid(grid);
        }

        if (validateGrid()) { 
            setTimeout(() => gridsVis[n - 3][1]("hidden"), 700); setTimeout(() => setWinV(""), 1500); 
        }
    }

    useEffect(() => {
        if (size == n) { const [i, j] = find(); update(i, j); }
    }, [size]);

    return (
        <button className="d-flex jc-cen text-dark border-0 br-10 cell" onClick={clicked}
            style={{ ...props.style, ...state }}>{props.value}</button>
    );
};

export default Cell;