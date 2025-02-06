import React, { useContext } from "react";

import { VisContext } from "../../contexts/VisContext";
import { GridContext } from "../../contexts/GridContext";

import { createGrid } from "../../utility";

const Card = props => {
    const { setDisV, gridsV } = useContext(VisContext);
    const { setGrid, setBlk, setDim } = useContext(GridContext);

    const dim = props.dim, dims = `${dim}x${dim}`;

    const handleClick = () => {
        const [grid, blk] = createGrid(dim); setDisV("hidden"); setBlk(blk); 
        setGrid(grid); setDim(dim); setTimeout(() => gridsV[dim - 3][1](""), 700);
    }

    return (
        <button className="d-flex text-center gap-2 px-4 py-3 bg-dark2 text-light br-10 card my-card" onClick={handleClick}>
            <h5>{props.tag}</h5> <img className="w-100 br-10" src={`../../../img/${dims}.png`} alt={dims} />
            <p className="card-text">A {dims} grid featuring {dim * dim - 1} tiles and a single empty space.</p>
        </button>
    );
};

export default Card;