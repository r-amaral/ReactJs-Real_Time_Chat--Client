import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RoomProvider } from "./Context";
import RoutesChat from "./routes/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RoomProvider>
      <RoutesChat />
    </RoomProvider>
  </React.StrictMode>
);
