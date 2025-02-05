import React, { useContext, useEffect, useState } from "react";

import VisContext from "../../contexts/VisContext";
import { GridContext } from "../../contexts/GridContext";

const Cell = props => {
    const n = props.n, { gridsVis } = useContext(VisContext), vis = gridsVis[n - 3];
    const { blk, setBlk, grid, setGrid } = useContext(GridContext);

    const [state, setState] = props.state;

    const clicked = () => {
        let i, j, [r, c] = blk, dis = props.dis;

        out: for (i = 0; i < n; i++) for (j = 0; j < n; j++)
            if (grid[i][j] == props.value) break out;

        if (Math.abs(r - i) + Math.abs(c - j) == 1) {
            setState({ top: r * dis, left: c * dis }); setBlk([i, j]);
            grid[r][c] = grid[i][j]; grid[i][j] = 0; setGrid(grid);
        }
    }

    useEffect(() => {
        if (vis[0] == "") {
            let i, j;
            out: for (i = 0; i < n; i++) for (j = 0; j < n; j++)
                if (grid[i][j] == props.value) break out;

            setState({ top: i * props.dis, left: j * props.dis });
        }

    }, [vis[0]]);

    return (
        <button className="d-flex jc-cen text-dark border-0 br-10 cell" onClick={clicked}
            style={{ ...props.style, ...state }}>{props.value}</button>
    );
};

export default Cell;