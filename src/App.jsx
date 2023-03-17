import React from "react";
import "./App.css";
import Pasta from "./Pasta";

export default function App() {
  return (
    <div className="container mx-auto my-4">
      <h1 className="text-4xl my-4">
        Copy Pasta{" "}
        <span style={{ fontSize: 18 }}>
          by{" "}
          <a target="_blank" href="https://www.michaelsimonaz.com/">
            Michael Simon
          </a>
        </span>
      </h1>
      <ol className="my-4 list-disc">
        <li>Enter some text</li>
        <li>Click copy to copy text</li>
        <li>Click delete to delete the input</li>
        <li>Click "add input" to add a new input</li>
        <li>
          Fields and values are automatically updated in URL parameters for easy
          sharing
        </li>
      </ol>
      <Pasta />
    </div>
  );
}
