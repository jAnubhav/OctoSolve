import React, { useContext, useEffect, useState } from "react";

import { GridContext } from "../contexts/GridContext";
import Cell from "./Cell";

import "./css/Grid.css";

const Grid = () => {
    const { n, size, mar, m, dis } = useContext(GridContext), cells = []

    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) if (i * n + j + 1 != m) {
        let state = useState({ top: i * dis, left: j * dis }), val = i * n + j;
        cells.push(<Cell key={val} state={state} value={val + 1} />);
    }

    return (
        <section className="br-10" id="main-grid"
            style={{ width: size * n + mar * (n - 1) }}>{cells}</section>
    );
};

export default Grid;