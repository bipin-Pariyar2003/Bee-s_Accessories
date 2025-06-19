// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import path from "path";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import { fileURLToPath } from "url";

// import accesoryRoute from "./route/accessories.route.js";
// import usersRoute from "./route/users.route.js";
// import cartRoute from "./route/cart.route.js"; // ✅ import your cart route

// dotenv.config();
// const app = express();

// // Middleware
// app.use(cors({ origin: "http://localhost:5173", credentials: true })); // Adjust origin to your frontend
// app.use(express.json());
// app.use(cookieParser()); // ✅ for reading JWT from cookies

// // MongoDB connection
// const URI = process.env.MONGO_URI;
// mongoose
//   .connect(URI)
//   .then(() => console.log("Connected to the database successfully"))
//   .catch((error) => console.error("Error connecting to the database:", error));

// // API routes
// app.use("/accessories", accesoryRoute);
// app.use("/users", usersRoute);
// app.use("/cart", cartRoute); // ✅ Add cart route here

// // Helper to log all registered routes, including nested routers
// function printRoutes(app) {
//   if (!app._router) {
//     console.log("No routes registered yet.");
//     return;
//   }

//   let routesFound = false;

//   const routes = [];

//   function exploreStack(stack, basePath = "") {
//     stack.forEach((layer) => {
//       if (layer.route && layer.route.path) {
//         routesFound = true;
//         const methods = Object.keys(layer.route.methods)
//           .map((m) => m.toUpperCase())
//           .join(", ");
//         routes.push(`${methods} ${basePath}${layer.route.path}`);
//       } else if (layer.name === "router" && layer.handle && layer.handle.stack) {
//         // Extract the mount path
//         let mountPath = "";
//         if (layer.regexp) {
//           const match = layer.regexp.source
//             .replace("^\\/", "")
//             .replace("\\/?$", "")
//             .replace("\\/", "/")
//             .split("|")[0];
//           mountPath = match.startsWith("/") ? match : "/" + match;
//           if (mountPath === "/^") mountPath = "";
//         }
//         exploreStack(layer.handle.stack, basePath + mountPath);
//       }
//     });
//   }

//   exploreStack(app._router.stack);

//   if (routesFound) {
//     routes.forEach((r) => console.log(r));
//   } else {
//     console.log("No routes registered yet.");
//   }
// }

// // Static frontend (Vite)
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));

// app.get(/^\/(?!accessories|users|api|cart).*/, (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"));
// });

// // Start server
// const port = process.env.PORT || 3000;
// app.get("/test-route", (req, res) => res.send("Test route working"));

// app.listen(port, () => {
//   console.log(`Server started on port: ${port}`);
//   // Delay by 100ms to allow Express internals to initialize
//   setTimeout(() => {
//     if (app._router) {
//       console.log("Printing routes now...");
//       printRoutes(app);
//     } else {
//       console.log("app._router is undefined");
//     }
//   }, 100);
// });

// console.log("My jwt secret code: ", process.env.JWT_SECRET);

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";

import accesoryRoute from "./route/accessories.route.js";
import usersRoute from "./route/users.route.js";
import cartRoute from "./route/cart.route.js"; // ✅ import your cart route

dotenv.config();
const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // Adjust origin to your frontend
app.use(express.json());
app.use(cookieParser()); // ✅ for reading JWT from cookies

// MongoDB connection
const URI = process.env.MONGO_URI;
mongoose
  .connect(URI)
  .then(() => console.log("Connected to the database successfully"))
  .catch((error) => console.error("Error connecting to the database:", error));

// API routes
app.use("/accessories", accesoryRoute);
app.use("/users", usersRoute);
app.use("/cart", cartRoute); // ✅ Add cart route here

// Helper to log all registered routes
function printRoutes(app) {
  if (!app._router) return console.log("No routes registered yet.");
  app._router.stack.forEach((middleware) => {
    if (middleware.route) {
      const methods = Object.keys(middleware.route.methods).join(", ").toUpperCase();
      console.log(`${methods} ${middleware.route.path}`);
    } else if (middleware.name === "router" && middleware.handle?.stack) {
      middleware.handle.stack.forEach((handler) => {
        if (handler.route) {
          const methods = Object.keys(handler.route.methods).join(", ").toUpperCase();
          console.log(`${methods} ${handler.route.path}`);
        }
      });
    }
  });
}

// Static frontend (Vite)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));

app.get(/^\/(?!accessories|users|api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"));
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
  printRoutes(app);
});

console.log("My jwt secred code: ", process.env.JWT_SECRET);
