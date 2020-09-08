import React from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        {`${this.props.text}: ${this.props.count}`}
        <button onClick={this.props.addCount}>加一</button>
        <button onClick={this.props.minusCount}>减一</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    count: state.count,
    text: state.text,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addCount: () => dispatch({ type: "ADD" }),
    minusCount: () => dispatch({ type: "DELETE" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
