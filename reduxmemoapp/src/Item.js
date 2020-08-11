import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {

    // 表示スタイルの設定
    pStyle = {
        fontSize: "15pt",
        backgroundColor: "white",
        color: "darkblue",
        padding: "5px 10px",
        border: "1px solid lightblue",
        minWidth: "300px",
        wordBreak: "break-all"
    }


    render() {
        return (
            <div className="disp">
                <p style={ this.pStyle }>{ this.props.value.message }</p>
                <p style={ this.pStyle }>{ this.props.value.created }</p>
                <p style={ this.pStyle }>{ this.props.value.selected }</p>
            </div>
        );
    }
}

export default connect()(Item);