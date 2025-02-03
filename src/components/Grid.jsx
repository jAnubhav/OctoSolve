import React, { useContext, useState } from "react";

import { GridContext } from "../contexts/GridContext";
import Cell from "./Cell";

import "./css/Grid.css";

const Grid = () => {
    const { n, size, mar, m, dis, blk, grid, setGrid } = useContext(GridContext);

    const cells = [], states = [], gSize = size * n + mar * (n - 1);

    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) if (i * n + j + 1 != m) {
        const state = useState({ top: i * dis, left: j * dis }), val = i * n + j + 1;
        states.push(state); cells.push(<Cell key={val} state={state} value={val} />);
    }

    return (
        <section className="br-10" id="main-grid" style={{ width: gSize }}>{cells}</section>
    );
};

export default Grid;