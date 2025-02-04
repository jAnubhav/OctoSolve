import React, { useState } from "react";

import VisContext from "./contexts/VisContext";
import { GridContainer } from "./contexts/GridContext";

import MenuDisplay from "./components/display/MenuDisplay";

import "./css/App.css";

const App = () => {
    const [disV, setDisV] = useState(""), [gridV, setGridV] = useState("hidden");

    return (
        <section className="bg-dark1 screen">
            <VisContext.Provider value={{ setDisV, setGridV }}> <GridContainer>
                <section className={`d-flex jc-cen bg-dark2 screen ${disV}`}>
                    <MenuDisplay /> </section>

                <section className={`d-flex jc-cen bg-dark2 screen ${gridV}`}
                    id="grid-container"></section>
            </GridContainer> </VisContext.Provider>
        </section>
    )
};

export default App;