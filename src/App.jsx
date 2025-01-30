import React from "react";

import Grid from "./components/Grid";

import "./css/App.css"

const App = () => {
    return (
        <section className="d-flex jc-cen" id="container">
            <section className="d-flex jc-cen"> <Grid /> </section>
            <section className="d-flex"></section>
        </section>
    );
};

export default App;