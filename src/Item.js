import React from "react";
import { connect } from "react-redux";
import { itemAtIdSelector } from "./redux/list/selectors";
import { creators } from "./redux/list/actions";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    background: "firebrick",
    margin: 5,
    color: "white",
    borderRadius: 10
  },
  remove: {
    height: 20,
    width: 20,
    background: "white"
  }
};

function Item({ text, remove }) {
  return (
    <div style={styles.root}>
      <div>{text}</div>
      <div style={styles.remove} onClick={remove} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps;
  const { text } = itemAtIdSelector(state, { id });
  return { text };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps;
  const remove = () => dispatch(creators.remove(id));
  return { remove };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Item);
