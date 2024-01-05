import { configureStore } from "@reduxjs/toolkit";
import textEditorReducer from "./reducers/textEditorReducer";

const store = configureStore({reducer: textEditorReducer})

export default store;
