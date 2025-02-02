import React, { useEffect, useState } from "react";

import "./css/Grid.css";

const Grid = () => {
    const grid = [[1, 2, 3], [4, 5, 6], [7, 8, -1]];
    const cells = [], states = [], arw = { "U": 0, "D": 1, "L": 2, "R": 3 };

    const y = [1, -1, 0, 0], x = [0, 0, 1, -1]; let blk = [2, 2];
    const size = 110, mar = 5, dis = size + mar, fit = size * 3 + mar * 2;

    const handleEvent = ind => {
        let r = blk[0] + y[ind], c = blk[1] + x[ind];

        if (0 <= r && r <= 2 && 0 <= c && c <= 2) {
            states[grid[r][c] - 1][1]({ top: blk[0] * dis, left: blk[1] * dis });
            grid[blk[0]][blk[1]] = grid[r][c]; blk = [r, c]; grid[r][c] = -1;
        }
    };

    useEffect(() => window.addEventListener("keydown", event => {
        let s = event.key; if (s.startsWith("Arrow")) handleEvent(arw[s.charAt(5)]);
    }), []);

    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) if (i * 3 + j != 8) {
        let state = useState({ top: i * dis, left: j * dis }); states.push(state);

        cells.push(<div key={i * 3 + j} className="d-flex jc-cen br-10 cell"
            style={{ width: size, ...state[0] }}>{i * 3 + j + 1}</div>);
    }

    return (
        <div id="grid" className="d-flex br-10" style={{ width: fit }}>{cells}</div>
    );
};

export default Grid;