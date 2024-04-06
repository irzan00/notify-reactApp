import React from "react";
import { createRoot } from "react-dom/client";
import NotifyApp from "./components/NotifyApp";
import NoteInput from "./components/NoteInput";

const element = (
    <NotifyApp />
);

const root = createRoot(document.getElementById("root"));

root.render(element);
