import React from "react";
import "./App.css";
import { Provider as ReduxProvider } from "react-redux";
import { SpreadoSetupProvider } from "spreado";
import {
  // spreadoReduxReducerPack,
  SpreadoSetupForReduxSwr,
} from "spreado/for-redux-swr";
import { configureStore } from "@reduxjs/toolkit";
import Todo from "./Todo/Todo";
import { todosReducer } from "./Todo/reducer";

const store = configureStore({
  reducer: todosReducer,
  middleware: (m) => m({ serializableCheck: false }),
});
const spreadoSetup = new SpreadoSetupForReduxSwr({ store });

const App = () => {
  return (
    <ReduxProvider store={store}>
      <SpreadoSetupProvider setup={spreadoSetup}>
        <Todo />
      </SpreadoSetupProvider>
    </ReduxProvider>
  );
};
export default App;
