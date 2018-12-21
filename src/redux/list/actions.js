const prefix = "LIST/";
const CREATE = `${prefix}ADD`;
const REMOVE = `${prefix}REMOVE`;
const EDIT = `${prefix}EDIT`;
const SELECT = `${prefix}SELECT`;

let id = 0;
const create = text => ({ type: CREATE, id: id++, text });
const remove = id => ({ type: REMOVE, id });
const edit = (id, text) => ({ type: EDIT, id, text });
const select = id => ({ type: SELECT, id });

export const types = { CREATE, REMOVE, EDIT, SELECT };
export const creators = { create, remove, edit, select };
