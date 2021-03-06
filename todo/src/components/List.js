import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addItem, strikeItem } from '../actions';//second
// import store from './';

class List extends Component {
    constructor(){
        super();
        this.state = {
            inputValue: ''
        }
    }

    submitHandler = event => {
        event.preventDefault();
        // console.log('submitHandler sucess', addItem)
        this.props.addItem(this.state.inputValue);
        this.setState({inputValue: ""})
    }

    inputHandler = event => {
        this.setState({
          inputValue: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input
                        value={this.state.inputValue}
                        placeholder="new Item"
                        onChange={this.inputHandler}
                    >{this.value}</input>
                    <button>Sumbit</button>

                </form>
                {this.props.todos.map(item => {
                    return (
                      <div key={item.key} className="listItem">
                        <div
                          key={item.value}
                          style={(item.completed) ? {"textDecoration": "line-through"} : {"textDecoration": "none"}}
                          onClick={(event) => this.props.strikeItem(item.id)}>{item.value}</div>
                          {/*third*/}
                          <button key={item.completed}>Delete</button>
                      </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
        // id: state.auth.id
    };
};

export default connect(mapStateToProps, {addItem, strikeItem})(List)//forth connects to store
