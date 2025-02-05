import React, { useState } from "react";

import Cell from "./Cell";

import "./css/Grid.css";

const Grid = props => {
    const n = props.n, m = n * n, size = 100, mar = 5, dis = size + mar, cells = [];

    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) if (i * n + j + 1 != m) {
        const state = useState({ top: i * dis, left: j * dis }); cells.push(
            <Cell key={i * n + j} value={i * n + j + 1} size={size} state={state} n={n} dis={dis} />);
    }

    return (
        <section className={`bg-dark2 br-10 main-grid ${props.visibility[0]}`}
            style={{ width: size * n + mar * (n - 1) }}>{cells}</section>
    );
};

export default Grid;