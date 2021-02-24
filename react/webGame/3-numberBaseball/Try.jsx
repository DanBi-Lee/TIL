import React, {Component} from 'react';

class Try extends Component{
    render() {
        return (
            <li>
                {this.props.item.try} : {this.props.item.result}
            </li>
        )
    }
}

export default Try;