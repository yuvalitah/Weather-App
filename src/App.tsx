import React from "react";
import { Header } from "./components/header";
import { ThemeProvider } from "./context";
import { Routes, Route } from "react-router-dom";
import { TABS, ITab } from "./constants";
import { SnackbarProvider } from "./context/Snackbar";
import { NotFoundPage } from "./components/pages";

function App() {
  return (
    <ThemeProvider>
      <SnackbarProvider>
        <Header />
        <Routes>
          {TABS.map(({ route, component, index }: ITab) => (
            <Route key={route} path={route} element={component} index={index} />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
