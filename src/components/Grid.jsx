import React, { useState } from "react";

import "./css/Grid.css";

const Grid = () => {
    const grid = Array.from(Array(9).keys()); grid[8] = -1;
    const states = [], cells = []; let blank = [2, 2];

    const arw = { "Up": 0, "Down": 1, "Left": 2, "Right": 3 };
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    for (let i = 0; i < 8; i++) {
        const [cell, change] = useState({ top: 0, left: 0 });

        states.push([cell, change]); cells.push(
            <div key={i} style={cell} 
                className="d-flex jc-cen br-10 cell"
            >{i + 1}</div>
        );
    };

    window.addEventListener("keydown", event => {
        const k = dir[arw[event.key.substring(5)]];
        const [r, c] = [blank[0] + k[0], blank[1] + k[1]];

        if (0 <= r && 0 <= c && r < 3 && c < 3) {
            const dis = r * 3 + c, [cell, change] = states[grid[dis]];
            
            change({ top: cell.top - k[0] * 102, left: cell.left - k[1] * 102});
            grid[blank[0] * 3 + blank[1]] = grid[dis]; blank = [r, c]; grid[dis] = -1;
        }
    });

    return (
        <section className="br-10" id="main-grid">{cells}</section>
    )
};

export default Grid;