import React from "react";
import Root from "./routes";
import { Provider } from "react-redux";
import store from "../store/index.store";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Root />
      </Provider>
    </React.Fragment>
  );
};

export default App;
