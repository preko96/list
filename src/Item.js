import React from "react";
import { connect } from "react-redux";
import { itemAtIdSelector } from "./redux/list/selectors";

function Item({ text }) {
  return <div>{text}</div>;
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  const { text } = itemAtIdSelector(state, { id });
  return { text };
};

export default connect(mapStateToProps)(Item);
