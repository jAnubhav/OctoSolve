import React, { useState } from "react";

import Cell from "./Cell";

import "./css/Grid.css";
import data from "./json/data.json";

const Grid = props => {
    const n = props.n, m = n * n, mar = 5, cells = [], d = data[n];
    const style = { ...d, "background": `var(--${d["color"]})` }, dis = d["width"] + mar;

    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) if (i * n + j + 1 != m) {
        const state = useState({ top: i * dis, left: j * dis }), val = i * n + j; cells.push(
            <Cell key={val} value={val + 1} state={state} n={n} dis={dis} style={style} />);
    }

    return (
        <section className={`bg-dark2 br-10 main-grid ${props.visibility[0]}`}
            style={{ width: d["width"] * n + mar * (n - 1) }}>{cells}</section>
    );
};

export default Grid;