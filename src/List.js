import React from "react";
import { connect } from "react-redux";
import { searchSelector } from "./redux/search/selectors";
import { idsSelector, selectFilteredIds } from "./redux/list/selectors";
import Item from "./Item";

function List({ ids }) {
  return ids.map(id => <Item key={id} id={id} />);
}

const mapStateToProps = state => {
  const search = searchSelector(state);
  const ids = search ? selectFilteredIds(state) : idsSelector(state);
  return { ids };
};

export default connect(mapStateToProps)(List);
