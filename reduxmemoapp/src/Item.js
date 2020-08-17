import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {

    render() {
        return (
            <div className="disp">
                <p className="memo">{ this.props.value.message }</p>
                <p className="memoP">{ this.props.value.created }</p>
                <p className="memoP">{ this.props.value.selected }</p>
            </div>
        );
    }
}

export default connect()(Item);