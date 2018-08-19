import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { updateUser, apiRequest } from './actions/action-user';
class App extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  onUpdateUser = (event) => {
    this.props.onUpdateUser(event.target.value);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.onApiRequest();
    }, 1000);
  }

  render() {

    // console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type='text' onChange={this.onUpdateUser} />
        <br />
        {this.props.user}
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch, props) => {
//   console.log(props);
//   return bindActionCreators({
//     onUpdateUser: updateUser
//   }, dispatch);
// }


const mapDispatchToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
}
/**
 * 
 * @param {*} state The state of the store is the first argument
 * @param {*} props The props passes to the App.js is stored in the props as object
 */
const mapStateToProps = (state, props) => {
  // console.log(props);
  return {
    products: state.products,
    user: state.user,
    userPlusProp: `${state.user} ${props.randomProp}`
  }
};


// const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
//   console.log(propsFromState, propsFromDispatch, ownProps);
//   return {};
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);
