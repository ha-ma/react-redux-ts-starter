import React from "react";
import ReactDOM from "react-dom";
import { store, persistor } from "./redux/store";
import * as serviceWorker from "./serviceWorker";
import { PersistGate } from "redux-persist/integration/react";

//  providers
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider as MuiStylesProvider
} from "@material-ui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Provider as ReduxProvider } from "react-redux";

//  App
import App from "./App";

//  styles
import { muiTheme, origTheme } from "./assets/styles/theme";

//	FontAwesomeIcon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <MuiThemeProvider theme={{ ...muiTheme, ...origTheme }}>
        <MuiStylesProvider injectFirst>
          <StyledThemeProvider theme={{ ...muiTheme, ...origTheme }}>
            <PersistGate loading={null} persistor={persistor}>
              <App />
            </PersistGate>
          </StyledThemeProvider>
        </MuiStylesProvider>
      </MuiThemeProvider>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
