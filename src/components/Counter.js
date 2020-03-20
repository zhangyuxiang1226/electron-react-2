import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
@inject('rootStore')
@observer
class Counter extends Component {
    render() {
        return (
            <div>
                counter
                <button onClick={() => {
                    this.props.rootStore.counterStore.add();
                }}>+</button>
                <div>{this.props.rootStore.counterStore.count}</div>
                <div>{this.props.rootStore.counterStore.tenTimes}</div>
            </div>
        )
    }
}

export default Counter;
