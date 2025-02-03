import React, { createContext, useState } from "react"

const GridContext = createContext();

const GridContainer = props => {
    const n = props.n, size = props.size, mar = props.mar, m = n * n;
    const dis = size + mar, [blk, setBlk] = useState([n - 1, n - 1]);

    const [grid, setGrid] = useState([...Array(n)].map((_, i) =>
        [...Array(n)].map((_, j) => (i * n + j + 1) % m)));

    return <GridContext.Provider value={
        { n, size, mar, m, dis, blk, setBlk, grid, setGrid }
    }>{props.children}</GridContext.Provider>;
};

export { GridContext, GridContainer };