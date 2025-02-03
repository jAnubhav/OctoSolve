import React from "react";

import { GridContainer } from "./contexts/GridContext";
import Grid from "./components/Grid";

import { n, size, mar } from "./params";

import "./css/App.css";

const App = () => {
    return (
        <section className="d-flex jc-cen" id="container">
            <section className="br-10" id="grid-container">
                <GridContainer n={n} size={size} mar={mar}> <Grid /> </GridContainer>
            </section>
        </section>
    );
};

export default App;