import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "./css/index.css";

createRoot(document.querySelector("div")).render(<App />);