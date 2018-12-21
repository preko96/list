import { types } from "./actions";

const { ADD, REMOVE, EDIT, SELECT } = types;

const initialState = {
  ids: ["-1", "-2", "-3"],
  "-1": { id: "-1", text: "hello1" },
  "-2": { id: "-2", text: "hello2" },
  "-3": { id: "-3", text: "hello3" },
  selected: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const { id, text } = action;
      return { ...state, [id]: { id, text } };
    case REMOVE: {
      const { id } = action;
      const { [id]: removedItem, ...rest } = state;
      return rest;
    }
    case EDIT: {
      const { id, text } = action;
      const item = state[id];
      return { ...state, [id]: { ...item, text } };
    }
    case SELECT: {
      const { id } = action;
      return { selected: id };
    }
    default:
      return state;
  }
};
