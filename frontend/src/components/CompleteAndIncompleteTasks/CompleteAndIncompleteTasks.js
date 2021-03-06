import React from 'react';
import Paper from '@material-ui/core/Paper'
import {withStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List'
import Badge from '@material-ui/core/Badge'

import Task from '../PresentationalComponents/TaskComponent'
import DeleteConfirmation from '../PresentationalComponents/DeleteConfirmation'

class CompleteAndIncompleteTasksComponent extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.root = props.classes.root;
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.state = {
      dialog: false,
      task: {}
    }

  }

  openDialog = task => (event) => {
    event.stopPropagation();

    this.setState({
      dialog: true,
      task: task
    })
  }

  closeDialog = task => event => {
    event.stopPropagation();

    this.setState({
      dialog: false,
      task: {}
    }, () => {
      if(task){
        this.handleDelete(task);
      }
    })
  }

  handleClick = (task) => () => {
    this.props.selectOrCreateTask(task);
  }

  handleDelete(task){
    this.props.deleteTask(task)
  }

  parseIncompleteTasks(){
    return this.props.tasks.map((task, index) => {
      return(
        <Task
         openDialog = {this.openDialog(task)}
         type={this.props.type}
         index = {index}
         todo={task}
         clickHandler={this.handleClick(task)}
         key = {index}
         />
      )
    })
  }

  render(){
    // console.log(this.root);
    return(
      <div className={'alltasks', `${this.props.type}`}>
        <Paper elevation = {7}>
          <Badge badgeContent = {this.props.tasks.length} color='primary'>
            <Typography variant="headline">
              {this.props.type}
            </Typography>
          </Badge>
          <div>
            <List component='nav'>
              {this.parseIncompleteTasks()}
            </List>
          </div>
        </Paper>

        <DeleteConfirmation task = {this.state.task} closeDialog = {this.closeDialog} open = {this.state.dialog}/>
      </div>
    )
  }
}

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

CompleteAndIncompleteTasksComponent.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CompleteAndIncompleteTasksComponent)
