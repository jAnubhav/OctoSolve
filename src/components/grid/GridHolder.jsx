import React, { useContext } from "react"

import { VisContext } from "../../contexts/VisContext";

import Grid from "./Grid";

const GridHolder = () => {
    const { gridsV } = useContext(VisContext), grids = [];

    gridsV.forEach((vis, i) => grids.push(<Grid dim={i + 3} vis={vis} />));

    return (
        <>
            {grids.map((e, i) => <section className={`d-flex jc-cen bg-dark2 screen ${gridsV[i][0]}`}
                key={i}><section className="p-3 bg-dark1 br-10">{e}</section></section>)}
        </>
    );
};

export default GridHolder;