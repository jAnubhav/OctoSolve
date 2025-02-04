import { createContext, useState } from "react";

const GridContext = createContext();

const GridContainer = props => {
    const [n, setN] = useState(0), [blk, setBlk] = useState([n - 1, n - 1]);

    const [grid, setGrid] = useState([...Array(n)].map((_, i) =>
        [...Array(n)].map((_, j) => (i * n + j + 1) % m)));

    return (
        <GridContext.Provider value={{ n, setN, blk, setBlk, grid, setGrid }}>
            {props.children}</GridContext.Provider>
    )
};

export { GridContainer, GridContext };