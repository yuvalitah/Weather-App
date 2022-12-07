import React from "react";
import { Header } from "./components/header";
import { ThemeProvider } from "./context";
import { Switch, Route } from "react-router-dom";
import { TABS, ITab } from "./constants";
import { SnackbarProvider } from "./context/Snackbar";
import { NotFoundPage } from "./components/pages";

function App() {
  return (
    <ThemeProvider>
      <SnackbarProvider>
        <Header />
        <Switch>
          {TABS.map(({ route, component, exact }: ITab) => (
            <Route
              key={route}
              path={route}
              component={component}
              exact={exact}
            />
          ))}
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
