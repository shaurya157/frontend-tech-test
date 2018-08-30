import React from 'react'
import IncompleteTasksContainer from '../containers/incomplete_tasks_container'

class HomeComponent extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getAllTasks()
  }

  render(){
    return(
      <section>
        Home component working!
        <IncompleteTasksContainer />
      </section>
    )
  }
}

export default HomeComponent