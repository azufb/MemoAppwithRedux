import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteMemo } from './Store';

class Item extends Component {

    // 表示スタイルの設定
    th = {
        fontSize: "14pt",
        backgroundColor: "blue",
        color: "white",
        padding: "5px 10px",
        width: "50px"
    }

    td = {
        fontSize: "14pt",
        backgroundColor: "white",
        color: "darkblue",
        padding: "5px 10px",
        border: "1px solid lightblue",
        minWidth: "300px"
    }

    date = {
        fontSize: "14pt",
        backgroundColor: "white",
        color: "darkblue",
        padding: "5px 10px",
        border: "1px solid lightblue",
        width: "80px"
    }


    constructor(props) {
        super(props);
        this.state = {
            number: 0　// deleteMemoの引数は、number。
        }
        this.handleDelete = this.handleDelete.bind(this);
    }
    // 削除
    handleDelete(e) {
        e.preventDefault();
        let action = deleteMemo(this.state.number);
        this.props.dispatch(action);
        this.setState({
            number: 0
        })
    }

    render() {
        return (
            <tr>
                <th style={ this.th }>{ this.props.index }</th>
                <td style={ this.td }>{ this.props.value.message }</td>
                <td style={ this.date }>{ this.props.value.created }</td>
                <td><input type="button" onClick={ this.handleDelete } value="Delete!" /></td>
            </tr>
        );
    }
}

export default connect()(Item);