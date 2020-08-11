import React, { Component } from 'react'
import { connect } from 'react-redux'

class Item extends Component {
  // 表示スタイルの設定
  p1 = {
    fontSize: '15pt',
    backgroundColor: 'white',
    color: 'darkblue',
    padding: '5px 10px',
    border: '1px solid lightblue',
    minWidth: '300px',
    wordBreak: 'break-all',
  }

  p2 = {
    fontSize: '15pt',
    backgroundColor: 'white',
    color: 'darkblue',
    padding: '5px 10px',
    border: '1px solid lightblue',
    width: '90px',
    height: '30px',
  }

  render() {
    return (
      <div className="disp">
        <p style={this.p1}>{this.props.value.message}</p>
        <p style={this.p2}>{this.props.value.genre}</p>
        <p style={this.p2}>{this.props.value.created}</p>
      </div>
    )
  }
}

export default connect()(Item)
