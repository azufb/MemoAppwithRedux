import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findMemo } from './Store';

class FindForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            find: ''
        }
        this.doChange = this.doChange.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChange(e) {
        this.setState({
            find: e.target.value　// 入力されたテキストをfindに設定。
        });
    }

    doAction(e) {
        e.preventDefault();
        let action = findMemo(this.state.find);
        this.props.dispatch(action); // 入力値が格納されたactionをレデューサーに送る。
    }

    render() {
        return (
            <form onSubmit={ this.doAction }>
                <input className='input' type='text' size='10' onChange={ this.doChange }
                    value={ this.state.message } />
                <input className='findBtn' type='submit' value='検索' />
            </form>
        );
    }
}

export default connect((state) => state)(FindForm);