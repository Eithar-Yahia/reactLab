import logo from './logo.svg';
import './App.css';
import React from 'react';


class ToDoList extends React.Component {
        constructor() {
            super();
            this.state = {

                items: []
            };

        }
        addItem = (item) => {
            let newItems = this.state.items;
            newItems.push(item);
            this.setState({
                items: newItems
            });
        }
        deleteItem = (id) => {

            let ItemsAfterDeleted = this.state.items.filter(
                (item, index) => {

                    return index !== id;
                }
            );

            this.setState({
                items: ItemsAfterDeleted
            });
        }
        render() {
            return ( <
                div className = "to-do-list" >


                {
                    this.state.items.map((item, index) => {
                            return ( <
                                Item item = { item }
                                id = { index }
                                key = { index }
                                onAction = {
                                    () => { this.deleteItem(index) }
                                }
                                />); 
                            })
                    } <
                    AddItem
                    add = { this.addItem }
                    / > < /
                    div >
                );
            }
        }

        class AddItem extends React.Component {
            constructor(props) {
                super();
                this.state = {
                    newItem: ""
                }
            }
            render() {
                return ( < div className = "input-area" >
                    <
                    input className = "input"
                    type = "text"
                    id = "addItem"
                    name = "newItem"
                    value = { this.state.newItem }
                    onChange = {
                        (e) => this.setState({ newItem: e.target.value })
                    }
                    / > <
                    input className = "btn"
                    type = "submit"
                    value = "Add Item"
                    onClick = {
                        () => {
                            this.props.add(this.state.newItem);
                            this.setState({ newItem: "" })
                        }
                    }
                    / > < /
                    div > );
            }

        }
        class Item extends React.Component {

            constructor(props) {
                super();
                this.state = {
                    item: props.item

                }
            }
            render() {
                return ( < div onClick = { this.props.onAction } >
                    <
                    div className = "to-do-item" > { this.props.item } < /div> < /
                    div > );
            }
        }


        export default ToDoList;