import React from "react";
import ReactDOM from "react-dom/client";
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import "./styles/index.scss";
import './i18n';
import {BrowserRouter} from "react-router-dom";

import App from "./App";
import {MantineProvider} from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <MantineProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </MantineProvider>
);
