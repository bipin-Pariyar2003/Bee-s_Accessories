import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "context/AuthProvider/index.jsx";
import { CartProvider } from "context/CartContext/index.jsx";
import { Toaster } from "react-hot-toast";

// 👇 Force theme manually BEFORE React renders anything
const theme = localStorage.getItem("theme") || "light";

document.documentElement.classList.remove("dark");
if (theme === "dark") {
  document.documentElement.classList.add("dark");
}
document.documentElement.setAttribute("data-theme", theme); // For DaisyUI
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CartProvider>
        <div className="">
          <App />
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);
