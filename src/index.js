import React from "react";
import ReactDOM from "react-dom";
import ShoppingList from "./components/shoppingList";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <ShoppingList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
