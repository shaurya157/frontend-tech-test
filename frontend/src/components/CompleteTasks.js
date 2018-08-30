import React from 'react';
import Task from './PresentationalComponents/TaskComponent'

class CompleteTasks extends React.Component {
  constructor(props){
    super(props)
    // this.clickMe = this.clickMe.bind(this);
  }
  //
  // clickMe(){
  //   this.props.createTask({id: 1, title: 'hello', description: 'why hello there'})
  // }

  handleClick = task => () => {
    this.props.selectOrCreateTask(task)
  }

  parseCompleteTasks(){

    return this.props.completeTasks.map((task, index) => {
      return(
        <Task todo={task} key = {index} callback={this.handleClick}/>
      )
    })
  }

  render(){
    return(
      <section>
        Complete Tasks
        <ul>
          {this.parseCompleteTasks()}
        </ul>
      </section>
    )
  }
}

export default CompleteTasks
