import { types } from "./actions";

const { ADD, REMOVE, EDIT, SELECT } = types;

const initialState = {
  ids: ["-1", "-2", "-3"],
  "-1": "test1",
  "-2": "test2",
  "-3": "test3",
  selected: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const { id, text } = action;
      return { ...state, [id]: text };
    case REMOVE: {
      const { id } = action;
      const { [id]: removedItem, ...rest } = state;
      return rest;
    }
    case EDIT: {
      const { id, text } = action;
      return { ...state, [id]: text };
    }
    case SELECT: {
      const { id } = action;
      return { selected: id };
    }
    default:
      return state;
  }
};
