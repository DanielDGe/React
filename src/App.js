import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';

import tasks from './sample/tasks.json'

//Components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';


console.log(tasks)

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }

    //Agregando la nueva tarea
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTask = this.state.tasks.filter(task => task.id !== id)
    console.log(newTask)
    this.setState({tasks: newTask})
  }

  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    })

    this.setState({tasks: newTasks})

  }
  

  render () {    
    return <div>
      
      <Router>

        <Link to="/">Inicio</Link>
        <br></br>
        <Link to="/posts">Publicaciones</Link>

        <br></br>
        <br></br>

        <Route exact path="/" render={ () => {
            return <div>
              <TaskForm addTask={this.addTask}></TaskForm>
              <Tasks 
                  tasks={this.state.tasks} 
                  deleteTask={this.deleteTask} 
                  checkDone={this.checkDone} 
                />
            </div>
          }}>
        </Route>

        <Route path="/posts" component={Posts}>

        </Route>
      </Router>

    </div>
  }
}

export default App;
