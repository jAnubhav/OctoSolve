import React from "react";

import Grid from "./components/Grid";

import "./css/App.css"

const App = () => {
    return (
        <section className="d-flex" id="container">
            <section><Grid /></section>
            <section></section>
        </section>
    )
};

export default App;