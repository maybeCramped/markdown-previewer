import { configureStore } from "@reduxjs/toolkit";
import textEditorReducer from "./reducers/textEditorReducer";
import textAreaDefaultValue from "../textAreaDefaultValue";

const store = configureStore({
  reducer: textEditorReducer,
  preloadedState: { text: textAreaDefaultValue },
});

export default store;
