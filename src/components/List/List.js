import React, { Component } from "react";
import { listRequest } from "../../modules/List";
import { connect } from "react-redux";

const ListDispatchToProps = { listRequest };

class List extends Component {
  componentDidMount() {
    this.props.listRequest();
  }
  render() {
    return <div>Hello world</div>;
  }
}

const mapStateToProps = state => ({
  isLoading: state.list.isLoading,
  result: state.list.result
});

export default connect(
  mapStateToProps,
  ListDispatchToProps
)(List);
