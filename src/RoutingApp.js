import React from "react";
import ToDolist from './toDoList';
import UserList from './UserList';
import Login from './Login';
import './App.css';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function RoutingApp() {
    return ( <
        Router >
        <
        div >
        <
        nav >
        <
        ul >



        <
        li >
        <
        Link to = "/to-do-list" > To - Do List < /Link> < /
        li > <
        li >
        <
        Link to = "/users" > Users < /Link> < /
        li > <
        li >
        <
        Link to = "/logout" > Login < /Link> < /
        li > <
        /ul> < /
        nav >

        {
            /* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */
        } <
        Switch >


        <
        Route path = "/to-do-list" >
        <
        ToDoList / >
        <
        /Route> <
        Route path = "/users" >
        <
        Users / >
        <
        /Route> <
        Route path = "/logout" >
        <
        Logout / >
        <
        /Route> < /
        Switch > <
        /div> < /
        Router >
    );
}

function login() {
    return ( < Login / > );
}

function ToDoList() {
    return ( < ToDolist / > );


}

function Users() {
    return ( < UserList / > );
}

function Logout() {
    return ( < Login / > );
}