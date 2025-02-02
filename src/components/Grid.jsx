import React, { useEffect, useState } from "react";

import "./css/Grid.css";

const Grid = () => {
    const grid = [[1, 2, 3], [4, 5, 6], [7, 8, -1]];
    const cells = [], states = []; let blank = [2, 2];

    const y = [1, -1, 0, 0], x = [0, 0, 1, -1];
    const arw = { "U": 0, "D": 1, "L": 2, "R": 3 };

    useEffect(() => {
        const handleEvent = ind => {
            const r = blank[0] + y[ind], c = blank[1] + x[ind];
            if (r < 0 || c < 0 || 2 < r || 2 < c) return;

            states[grid[r][c] - 1][1]({ top: blank[0] * 102, left: blank[1] * 102 });
            grid[blank[0]][blank[1]] = grid[r][c]; blank = [r, c]; grid[r][c] = -1;
        };

        window.addEventListener("keydown", e => {
            let s = e.key; if (s.startsWith("Arrow")) handleEvent(arw[s.charAt(5)]);
        });
    }, []);

    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) {
        let state = useState({ top: i * 102, left: j * 102 });

        cells.push(<div key={i * 3 + j} className="d-flex jc-cen br-10 cell"
            style={state[0]}>{i * 3 + j + 1}</div>); states.push(state);
    } cells.pop(); states.pop();

    return (<section id="main-grid" className="d-flex br-10">{cells}</section>);
};

export default Grid;