import React from "react";
// @ts-ignore
import { App } from "./App/index.tsx";
import { render } from "react-dom";

const rootNode = document.getElementById("root");
render(
    <App />,
    rootNode
);
