import React, { StrictMode } from "react";
import { render } from "react-dom";

render(
    <StrictMode>
        <h1>Hello from React!</h1>
    </StrictMode>,
    document.getElementById("app")
);
