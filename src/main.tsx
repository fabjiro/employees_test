import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config/query.config.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <div className="w-screen h-screen">
            <App />
            <Toaster />
          </div>
        </QueryClientProvider>
      </BrowserRouter>
    </NextUIProvider>
  </React.StrictMode>
);
