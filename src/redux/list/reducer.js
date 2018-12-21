import { types } from "./actions";

const { ADD, REMOVE, EDIT, SELECT } = types;

const initialState = {
  ids: ["-1", "-2", "-3", "-4", "-5", "-6"],
  "-1": { id: "-1", text: "hello1234" },
  "-2": { id: "-2", text: "hello2345" },
  "-3": { id: "-3", text: "hello3456" },
  "-4": { id: "-4", text: "hello4567" },
  "-5": { id: "-5", text: "hello5678" },
  "-6": { id: "-6", text: "hello6789" },
  selected: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const { id, text } = action;
      return { ...state, [id]: { id, text } };
    case REMOVE: {
      const { id } = action;
      const ids = state.ids.filter(itemId => itemId !== id);
      const { [id]: removedItem, ...rest } = state;
      const newState = { ...rest, ids };
      return newState;
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
