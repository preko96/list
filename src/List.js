import React from "react";
import { connect } from "react-redux";
import { idsSelector } from "./redux/list/selectors";
import Item from "./Item";

function List({ ids }) {
  return ids.map(id => <Item key={id} id={id} />);
}

const mapStateToProps = state => {
  const ids = idsSelector(state);
  return { ids };
};

export default connect(mapStateToProps)(List);
