import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMemo } from './Store';

const InitialSelection = 'Work'; // selectedの初期状態

class AddForm extends Component {
    
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
                <form className='submit' onSubmit={ this.doAction }>
                    <input className='input' type='text' size='20' onChange={ this.doChange }
                        value={ this.state.message } required />
                    <div className='addSelect'>
                    <span className='selectTag'>分類タグ:</span>
                    <select className='select' onChange={ this.doSelected }>
                        <option>Work</option>
                        <option>Vacation</option>
                        <option>Money</option>
                    </select>
                    <input className='addBtn' type='submit' value='追加' />
                    </div>
                </form>
            </div>
        );
    }
}

export default connect((state) => state)(AddForm);