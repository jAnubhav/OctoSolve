import React from "react";

import Grid from "./components/Grid";

import "./css/App.css"

const App = () => {
    return (
        <section className="d-flex" id="container">
            <section className="br-10" id="grid-container"> <Grid /> </section>
        </section>
    )
};

export default App;