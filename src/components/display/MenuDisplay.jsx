import React, { useContext } from "react";

import { VisContext } from "../../contexts/VisContext";

import Card from "./ChoiceCard";

import "./css/Menu.css";

const MenuDisplay = () => {
    const { disV } = useContext(VisContext), cards = [];

    ["Beginner", "Intermediate", "Advanced"].map((e, i) =>
        cards.push(<Card key={i} tag={e} dim={i + 3} />));

    return (
        <section className={`d-flex jc-cen bg-dark2 screen ${disV}`}>
            <section className="p-5 bg-dark1 br-10">
                <p className="text-center text-light title">TileShift</p>
                <section className="d-flex gap-5">{cards}</section>
            </section>
        </section>
    );
};

export default MenuDisplay;