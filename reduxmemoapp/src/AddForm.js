import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMemo } from './Store';


const InitialSelection = 'Work'; // selectedの初期状態

class AddForm extends Component {
    input = {
        fontSize: "16pt",
        color: "#006",
        padding: "1px",
        margin: "5px 0px"
    }

    btn = {
        fontSize: "14pt",
        color: "#006",
        padding: "2px 10px"
    }

    constructor(props) {
        super(props);
        this.state = {
           message: '' ,
           selected: InitialSelection
        }
        this.doChange = this.doChange.bind(this);
        this.doSelected = this.doSelected.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChange(e) {
        this.setState({
            message: e.target.value // 入力されたテキストをmessageステートに設定。
        });
    }

    doSelected(e) {
        this.setState({
            selected: e.target.value //選択されたジャンルをselectedステートに設定。
        });
    }

    doAction(e) {
        e.preventDefault();
        let action = addMemo(this.state.message, this.state.selected); // addと同時にジャンルの情報も送る！
        this.props.dispatch(action); // actionをレデューサーに送る。
        this.setState({
            message: ''
        });
    }

    render() {
        return (
            <div>
                <p style={ this.message }>{ this.props.message }</p>
                <form onSubmit={ this.doAction }>
                    <input type="text" size="40" onChange={ this.doChange }
                        style={ this.input } value={ this.state.message } required />
                    <select onChange={ this.doSelected }>
                        <option>Work</option>
                        <option>Vacation</option>
                        <option>Money</option>
                    </select>
                    <input type="submit" style={ this.btn } value="Add" />
                </form>
            </div>
        );
    }
}

export default connect((state) => state)(AddForm);