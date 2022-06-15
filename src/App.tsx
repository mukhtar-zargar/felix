import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import "./App.css";
import { lightTheme, darkTheme } from "./theme";
import { store } from "./store";
import Root from "./pages/Root";

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
          <Root />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
