const prefix = "SEARCH/";
const CHANGE = `${prefix}CHANGE`;

const change = text => ({ type: CHANGE, text });

export const types = { CHANGE };
export const creators = { change };
