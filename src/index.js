import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./pages";

import "./styles.css";

const App = () => <Homepage />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
