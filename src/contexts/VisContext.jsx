import { createContext, useState } from "react";

const VisContext = createContext();

const VisContainer = props => {
    const [disV, setDisV] = useState(""), gridsV = [];
    const [winV, setWinV] = useState("hidden");

    for (let i = 0; i < 3; i++) gridsV.push(useState("hidden"));

    return (
        <VisContext.Provider value={
            { disV, setDisV, winV, setWinV, gridsV }
        }> {props.children} </VisContext.Provider>
    );
};

export { VisContainer, VisContext };