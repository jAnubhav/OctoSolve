import { createContext, useState } from "react";

const GridContext = createContext();

const GridContainer = props => {
    const [blk, setBlk] = useState(), [grid, setGrid] = useState();
    const [dim, setDim] = useState(-1);

    return (
        <GridContext.Provider value={{
            blk, setBlk, grid, setGrid, dim, setDim
        }}>{props.children}</GridContext.Provider>
    );
};

export { GridContainer, GridContext };