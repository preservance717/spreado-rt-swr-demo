import React from "react";
import "./App.css";
import { Provider as ReduxProvider } from "react-redux";
import { SpreadoSetupProvider } from "spreado";
import {
  spreadoReduxReducerPack,
  SpreadoSetupForReduxSwr,
} from "spreado/for-redux-swr";
import { configureStore } from "@reduxjs/toolkit";
import Counter from "./Counter";

const store = configureStore({
  reducer: spreadoReduxReducerPack,
  middleware: (m) => m({ serializableCheck: false }),
});
const spreadoSetup = new SpreadoSetupForReduxSwr({ store });

const App = () => {
  return (
    <ReduxProvider store={store}>
      <SpreadoSetupProvider setup={spreadoSetup}>
        <Counter />
      </SpreadoSetupProvider>
    </ReduxProvider>
  );
};

export default App;
