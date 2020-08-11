import React, { Component } from "react";
import { connect } from "react-redux";
import { addMemo } from "./Store";

const INITIAL_GENRE = "Work";

class AddForm extends Component {
    input = {
        fontSize: "16pt",
        color: "#006",
        padding: "1px",
        margin: "5px 0px"
    };

    btn = {
        fontSize: "14pt",
        color: "#006",
        padding: "2px 10px"
    };

    constructor(props) {
        super(props);

        this.state = {
            message: "",
            genre: INITIAL_GENRE
        };

        this.doChange = this.doChange.bind(this);
        this.onGenreSelected = this.onGenreSelected.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    doChange(e) {
        this.setState({
            message: e.target.value // 入力されたテキストをmessageステートに設定。
        });
    }

    onGenreSelected(event) {
        this.setState({
            genre: event.target.value
        });
    }

    doAction(e) {
        e.preventDefault();
        let action = addMemo(this.state.message, this.state.genre);
        this.props.dispatch(action); // actionをレデューサーに送る。
        this.setState({
            message: ""
        });
    }

    render() {
        return (
            <div>
                <p style={this.message}>{this.props.message}</p>
                <form onSubmit={this.doAction}>
                    <input
                        type="text"
                        size="40"
                        onChange={this.doChange}
                        style={this.input}
                        value={this.state.message}
                        required
                    />

                    {/* <SelectGenre setParentState={this.setGenre} /> */}

                    <select onChange={this.onGenreSelected}>
                        <option>Work</option>
                        <option>Vacation</option>
                        <option>Money</option>
                    </select>

                    <input type="submit" style={this.btn} value="Add" />
                </form>
            </div>
        );
    }
}

// 予め関数を作っておく
// this.setGenre = (genre) => this.setState({ ...this.state, genre })

// const SelectGenre = (props) => {
//   const handleChange = (event) => {
//     const selectedGenre = event.target.value
//     props.setParentState(selectedGenre)
//   }

//   return (
//     <select onChange={handleChange}>
//       <option>Work</option>
//       <option>Vacation</option>
//       <option>Money</option>
//     </select>
//   )
// }

export default connect((state) => state)(AddForm);
