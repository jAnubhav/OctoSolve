import React, { useContext, useEffect, useState } from "react";

import { GridContext } from "../contexts/GridContext";
import Cell from "./Cell";

import "./css/Grid.css";

const Grid = () => {
    const { n, size, mar, m, dis, blk, setBlk, grid, setGrid } = useContext(GridContext);

    const cells = [], states = [],  arw = { 'U': 0, 'D': 1, 'L': 2, 'R': 3 };
    const y = [1, -1, 0, 0], x = [0, 0, 1, -1], gSize = size * n + mar * (n - 1);

    const handleEvent = ind => {
        let [r, c] = blk, i = r + y[ind], j = c + x[ind];

        if (0 <= i && i < n && 0 <= j && j < n) {
            // states[grid[i][j] - 1][1]({ top: r * dis, left: c * dis });
            grid[r][c] = grid[i][j]; grid[i][j] = 0; setGrid(grid); 
            setBlk([i, j]);
        }
    };

    useEffect(() => window.addEventListener("keydown", event => {
        const k = event.key; if (k.startsWith("Arrow")) handleEvent(arw[k.charAt(5)]);
    }), []);

    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) if (i * n + j + 1 != m) {
        let state = useState({ top: i * dis, left: j * dis }), val = i * n + j + 1;
        states.push(state); cells.push(<Cell key={val} state={state} value={val} />);
    }

    return (
        <section className="br-10" id="main-grid" style={{ width: gSize }}>{cells}</section>
    );
};

export default Grid;