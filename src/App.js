import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component {
    constructor(props) {
        super();
        this.state = { initCount: 10 }
    }
    render() {
        return ( <
            div className = "App" >
            <
            Counter initCount = { this.state.initCount }
            />

            <
            /div>
        );
    }
}
class Counter extends React.Component {
    constructor(props) {
        super();
        this.state = {
            count: props.initCount
        }
    }

    buttonStyle = {
        backgroundColor: 'black'

    };
    container = {
        backgroundColor: '#ccc'
    };
    changeCount = (op) => {
        if (op === "+") {
            this.setState({
                count: this.state.count + 1,
            });
        }
        if (op === '-') {
            this.setState({ count: this.state.count - 1, });
        }

    };
    render() {
        return ( <
            div style = { this.container } >
            <
            span className = "counter" > { this.state.count } < /span>

            <
            button className = "btn-dec"
            onClick = {
                () => { this.changeCount("+") }
            } > Increase < /button> <
            button className = "btn-inc"
            onClick = {
                () => { this.changeCount("-") }
            } > Decrease < /button>

            <
            /div>
        );
    }
}
export default App;