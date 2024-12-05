import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Provider } from "react-redux";
import store from "@/Redux/store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="blue" storageKey="vite-ui-theme">
        <TooltipProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </TooltipProvider>
        <Toaster />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
