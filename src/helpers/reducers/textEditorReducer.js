import { SET_TEXT } from "./actions";

  const textEditorReducer = (state = {}, {type, text}) => {
    switch (type) {
      case SET_TEXT:
        return {
          ...state,
          text
        };
      default:
        return state;
    }
  };

  export default textEditorReducer;

 
  