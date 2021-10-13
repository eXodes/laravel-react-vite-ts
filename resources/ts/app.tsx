import React, { StrictMode } from "react";
import { render } from "react-dom";
import "../css/app.css"


render(
    <StrictMode>
        <div className="bg-gray-50 min-h-screen w-full flex">
            <h1 className="m-auto text-5xl font-bold">Hello from React with Vite and HMR on Runcloud!</h1>
        </div>
    </StrictMode>,
    document.getElementById("app")
);
