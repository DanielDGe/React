import React, { Component } from 'react';
import './Task.css';
import PropTypes from 'prop-types';

class Task extends Component {

    StyleCompleted() {

        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render () {

        const {task} = this.props;
        
        //Inline => style={{background: 'red'}} es un Objeto de Js
        //Class => className="color"
        return <p style={this.StyleCompleted()}>
            {task.title} - 
            {task.description} - 
            {task.done} - 
            {task.id}
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}></input>
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
                x
            </button>
        </p>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

//Inline style with variable
const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;