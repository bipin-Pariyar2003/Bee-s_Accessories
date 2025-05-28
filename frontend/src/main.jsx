import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// 👇 Force theme manually BEFORE React renders anything
const theme = localStorage.getItem("theme") || "light";

document.documentElement.classList.remove("dark");
if (theme === "dark") {
  document.documentElement.classList.add("dark");
}
document.documentElement.setAttribute("data-theme", theme); // For DaisyUI
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="dark:bg-black dark:bg-opacity-800 dark:text-white">
      <App />
    </div>
  </StrictMode>
);
