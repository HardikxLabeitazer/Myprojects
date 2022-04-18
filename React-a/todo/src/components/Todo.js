import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super();

        this.state ={
            tasks :[],

            currTask :''
        }
    }
    handlechange=(e)=>{
        console.log(e.target.value)
        this.setState({
            currTask:e.target.value
        })
    }

    handleAddTask=()=>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length + 1}],
            currTask :''
        })
    }
    handleDelete=(id)=>{
        let newarr =this.state.tasks.filter((taskObj)=>{
            return taskObj.id !== id;
        })

        this.setState({
            tasks :[...newarr]
        })
    }
  render() {
    return (
      <div>
          <input  type='text' value={this.state.currTask} onChange={this.handlechange}/>
          <button onClick={this.handleAddTask}>Add Task</button>
          <ul>
            {
                this.state.tasks.map((taskObj)=>(
                    <li>
                        <p>{taskObj.task}</p>
                        <button onClick={()=>this.handleDelete(taskObj.id)}>Delete</button>
                    </li>
                ))
            }

          </ul>
      </div>
    )
  }
}
