import logo from './logo.svg';
import './App.css';
import React from 'react';
import RoutingApp from './RoutingApp';


class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    setInputValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    login = async() => {
        let loadRoutingApp = function() {
            console.log("djfkdk");
            return ( < RoutingApp / > );
        }
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        let res = await fetch("https://reqres.in/api/login", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        });
        let resJson = await res.json();
        if (resJson.token) {
            alert("Login success");
            loadRoutingApp();
        } else {
            alert(resJson.error)
        }
    }

    render() {
        return <div >
            <
            h1 > Login < /h1>
        Username: < input type = "text"
        value = { this.state.username }
        onChange = { this.setInputValue }
        name = "username" / > < br / >
            Password: < input type = "password"
        value = { this.state.password }
        onChange = { this.setInputValue }
        name = "password" / > < br / >
            Email: < input type = "email"
        value = { this.state.email }
        onChange = {
            (e) => this.setState({ email: e.target.value })
        }
        name = "email" / > < br / >
            <
            button onClick = { this.login } > Login < /button> < /
        div >
    }
}
export default Login;