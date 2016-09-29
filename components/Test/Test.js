import React, { Component } from 'react';

export default class Test extends Component {
    render() {
        return <div className="abc">My test name is {this.props.name}</div>;
    }
}

