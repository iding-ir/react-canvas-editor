import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./localization/";

import "./styles/reset.scss";
import "./styles/scrollbar.scss";
import "./styles/fonts.scss";
import "./styles/vars.scss";
import "./styles/main.scss";
import { App } from "./components/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
