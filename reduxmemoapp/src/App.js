import React, { Component } from 'react';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';
import './App.css';
import Memo from './Memo';
import AddForm from './AddForm';
import FindForm from './FindForm';
import DelForm from './DelForm';

class App extends Component {

  constructor(props) {
    // 複数のclassを扱う時は、必要。
    super(props);
  }

  render() {
    return (
      <div>
        <MediaQuery query='(max-width: 767px)'>
          <div>
            <h1>タグメモ！</h1>
            <p　className="description">
              タグメモ！を使うと、走り書きのようなメモの分類ができて、<br></br>
              よくわからない謎の数字や文字がなくなり、分類を見ると、何のためのメモなのか、
              わかりやすくなります！
            </p>
            <AddForm />
            <div className="findAndDelete">
              <span className="find" visibility={this.state.showButton ? "visible": "hidden"}><FindForm /></span>
              <span className="delete"><DelForm /></span>
            </div>
            <Memo />
          </div>
        </MediaQuery>

        <MediaQuery query='(min-width: 768px)'> 
          <div>
            <h1>タグメモ！</h1>
            <p　className="description">
              タグメモ！を使うと、走り書きのようなメモの分類ができて、<br></br>
              よくわからない謎の数字や文字がなくなり、分類を見ると、何のためのメモなのか、
              わかりやすくなります！
            </p>
            <AddForm />
            <div className="findAndDelete">
              <span className="find"><FindForm /></span>
              <span className="delete"><DelForm /></span>
            </div>
            <Memo />
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default connect()(App);
