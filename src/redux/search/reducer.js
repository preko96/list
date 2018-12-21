import { types } from "./actions";

const { CHANGE } = types;
const initialState = "";

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE:
      const { text } = action;
      return text;
    default:
      return state;
  }
};
