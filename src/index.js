import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { SWRConfig } from "swr";
import axiosClient from "./api-client/axiosClient";

ReactDOM.render(
  <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false, revalidateOnFocus: false, }}>
    <Provider store={store}> 
      <App />
    </Provider>
  </SWRConfig>, 
  document.getElementById("root")
);
