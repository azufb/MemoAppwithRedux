import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Memo from './Memo';
import AddForm from './AddForm';
// import FindForm from './FindForm';

class App extends Component {
  constructor(props) {
    // 複数のclassを扱う時は、必要。
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Memo</h1>
        <AddForm />
        <hr />
        <table><tbody><tr>
          {/*<td><FindForm /></td>*/}
        </tr></tbody></table>
        <Memo />
      </div>
    );
  }
}

export default connect()(App);
