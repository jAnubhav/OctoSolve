import React from "react";

import { VisContainer } from "./contexts/VisContext";
import { GridContainer } from "./contexts/GridContext";

import MenuDisplay from "./components/display/MenuDisplay";
import GridHolder from "./components/grid/GridHolder";
import WinScreen from "./components/win/WinScreen";

const App = () => {
    return (
        <section className="bg-dark1 screen">
            <VisContainer> <GridContainer>
                <MenuDisplay /> <GridHolder /> <WinScreen />
            </GridContainer> </VisContainer>
        </section>
    );
};

export default App;