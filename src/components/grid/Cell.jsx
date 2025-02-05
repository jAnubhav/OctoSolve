import React, { useContext } from "react";

import { GridContext } from "../../contexts/GridContext";

const Cell = props => {
    const { blk, setBlk, grid, setGrid } = useContext(GridContext), n = props.n;

    const clicked = () => {
        let i, j, [r, c] = blk, setState = props.state[1], dis = props.dis;

        out: for (i = 0; i < n; i++) for (j = 0; j < n; j++)
            if (grid[i][j] == props.value) break out;

        if (Math.abs(r - i) + Math.abs(c - j) == 1) {
            setState({ top: r * dis, left: c * dis }); setBlk([i, j]);
            grid[r][c] = grid[i][j]; grid[i][j] = 0; setGrid(grid);
        }
    }

    return (
        <button className="d-flex jc-cen text-dark border-0 br-10 cell" onClick={clicked} style={
            { ...props.style, ...props.state[0] }}>{props.value}</button>
    );
};

export default Cell;