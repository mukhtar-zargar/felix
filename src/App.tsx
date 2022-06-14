import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import "./App.css";
import Routes from "./routes";
import { lightTheme, darkTheme } from "./theme";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider
        theme={
          store.getState().themeDetails.theme === "light"
            ? lightTheme
            : darkTheme
        }
      >
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
