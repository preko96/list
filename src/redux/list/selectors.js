import { searchSelector } from "../search/selectors";

export const listSelector = state => state.list;
export const idsSelector = state => state.list.ids;
export const selectedSelector = state => state.list.selected;

export const itemAtIdSelector = (state, props) => {
  const list = listSelector(state);
  const { id } = props;
  return list[id];
};

export const selectFilteredIds = state => {
  const search = searchSelector(state);
  const ids = idsSelector(state);
  console.log(ids);
  const listItems = ids.map(id => itemAtIdSelector(state, { id }));
  console.log(listItems);
  const filteredItems = listItems.filter(item => item.text.includes(search));
  const filteredIds = filteredItems.map(item => item.id);
  return filteredIds;
};
