import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import ThemeSwitcher from "./components/ThemeSwitcher";
import configureStore from "./store";
import swConfig from "./swConfig";

const store = configureStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeSwitcher>
        <App />
      </ThemeSwitcher>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register(swConfig);
