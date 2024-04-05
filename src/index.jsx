import React from "react";
import { createRoot } from "react-dom/client";
import NotifyApp from "./components/NotifyApp";
import NoteInput from "./components/NoteInput";

const element = (
  <div className="container">
    <NotifyApp />
  </div>
);

const root = createRoot(document.getElementById("root"));

root.render(element);
