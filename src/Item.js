import React from "react";
import { connect } from "react-redux";
import { itemAtIdSelector } from "./redux/list/selectors";

function Item({ name }) {
  return <div>{name}</div>;
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  const name = itemAtIdSelector(state, { id });
  return { name };
};

export default connect(mapStateToProps)(Item);
