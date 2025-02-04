import React from "react";

import Card from "./ChoiceCard";

import "./css/Menu.css";

const MenuDisplay = () => {
    const tags = ["Beginner", "Intermediate", "Advanced"];
    
    const cards = [...Array(3)].map((_, i) =>
        <Card key={i} tag={tags[i]} n={i + 3} />);

    return (
        <section className="p-5 bg-dark1 br-10">
            <p className="text-center text-light title">TileShift</p>
            <section className="d-flex gap-5">{cards}</section>
        </section>
    );
};

export default MenuDisplay;