import { createContext, useState } from "react";

const GridContext = createContext();

const GridContainer = props => {
    const [blk, setBlk] = useState(null), [grid, setGrid] = useState(null);

    return (
        <GridContext.Provider value={{ blk, setBlk, grid, setGrid }}>
            {props.children}</GridContext.Provider>
    );
};

export { GridContainer, GridContext };