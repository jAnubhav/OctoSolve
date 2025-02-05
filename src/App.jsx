import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

import VisContext from "./contexts/VisContext";
import { GridContainer } from "./contexts/GridContext";

import MenuDisplay from "./components/display/MenuDisplay";
import Grid from "./components/grid/Grid";

import "./css/App.css";

const App = () => {
    const [disV, setDisV] = useState(""), grids = [], gridsVis = [];

    for (let i = 0; i < 3; i++) {
        const vis = useState("hidden"); gridsVis.push(vis); grids.push(<Grid n={i + 3} vis={vis} />);
    }

    return (
        <section className="bg-dark1 screen">
            <VisContext.Provider value={{ setDisV, gridsVis }}> <GridContainer>
                <section className={`d-flex jc-cen bg-dark2 screen ${disV}`}> <MenuDisplay /> </section>

                {grids.map((e, i) => <section className={`d-flex jc-cen bg-dark2 screen ${gridsVis[i][0]}`}
                    key={i}><section className="p-3 bg-dark1 br-10">{e}</section></section>)}
            </GridContainer> </VisContext.Provider>
        </section>
    )
};

export default App;