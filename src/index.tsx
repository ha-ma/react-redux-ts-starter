import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store, persistor } from "./store/store";
import * as serviceWorker from "./serviceWorker";
import { PersistGate } from "redux-persist/integration/react";

//  providers
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Provider as ReduxProvider } from "react-redux";

//  styles
import { muiTheme, origTheme } from "./assets/styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <MuiThemeProvider theme={{ ...muiTheme, origTheme }}>
        <StyledThemeProvider theme={{ ...muiTheme, ...origTheme }}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </StyledThemeProvider>
      </MuiThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
