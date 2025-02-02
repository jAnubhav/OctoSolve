import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./css/index.css";

const root = createRoot(
    document.querySelector("#root")
); root.render(<App />);