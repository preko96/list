import React from "react";
import { connect } from "react-redux";
import { creators } from "./redux/search/actions";

function Search({ onChange }) {
  return <input onChange={onChange} />;
}

const mapDispatchToProps = dispatch => {
  const onChange = e => dispatch(creators.change(e.target.value));
  return { onChange };
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
