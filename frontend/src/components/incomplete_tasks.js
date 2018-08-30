import React from 'react';

class IncompleteTasksComponent extends React.Component {
  constructor(props){
    super(props)
    // this.clickMe = this.clickMe.bind(this);
  }
  //
  // clickMe(){
  //   this.props.createTask({id: 1, title: 'hello', description: 'why hello there'})
  // }

  parseIncompleteTasks(){

    return this.props.incompleteTasks.map((task, index) => {
      return(
        <li key = {index}>
          <h1>{task.title}</h1>
        </li>
      )
    })
  }

  render(){
    return(
      <section>
        Incomplete Tasks
        <ul>
          {this.parseIncompleteTasks()}
        </ul>
      </section>
    )
  }
}

export default IncompleteTasksComponent
