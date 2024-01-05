export const SET_TEXT = "SET_TEXT"; 

const setText = (text) => {
    return {
      type: SET_TEXT,
      text
    }
  };
export default setText;