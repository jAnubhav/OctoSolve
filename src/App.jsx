import React, { useState } from "react";

import VisContext from "./contexts/VisContext";
import { GridContainer } from "./contexts/GridContext";

import MenuDisplay from "./components/display/MenuDisplay";
import Grid from "./components/grid/Grid";

import "./css/App.css";
import WinScreen from "./components/screen/WinScreen";

const App = () => {
    const [disV, setDisV] = useState(""), [winV, setWinV] = useState("hidden");
    const [size, setSize] = useState(-1), grids = [], gridsVis = [];

    for (let i = 0; i < 3; i++) {
        const vis = useState("hidden"); gridsVis.push(vis); grids.push(<Grid n={i + 3} vis={vis} />);
    }

    return (
        <section className="bg-dark1 screen">
            <VisContext.Provider value={{ setDisV, gridsVis, winV, setWinV, size, setSize }}> <GridContainer>
                <section className={`d-flex jc-cen bg-dark2 screen ${disV}`}> <MenuDisplay /> </section>

                {grids.map((e, i) => <section className={`d-flex jc-cen bg-dark2 screen ${gridsVis[i][0]}`}
                    key={i}><section className="p-3 bg-dark1 br-10">{e}</section></section>)}
                
                <section className={`d-flex jc-cen bg-dark2 screen ${winV}`}> <WinScreen /> </section>
            </GridContainer> </VisContext.Provider>
        </section>
    );
};

export default App;