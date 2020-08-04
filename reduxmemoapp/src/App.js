import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Memo from './Memo';
import AddForm from './AddForm';
import FindForm from './FindForm';
import DelForm from './DelForm';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Memo</h1>
        <AddForm />
        <hr />
        <table><tbody><tr>
          <td><FindForm /></td>
          <td><DelForm /></td>
        </tr></tbody></table>
        <Memo />
      </div>
    );
  }
}

export default App;
