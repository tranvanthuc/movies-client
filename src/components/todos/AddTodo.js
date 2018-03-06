import React from 'react';
import { connect } from 'react-redux';
import { todoActions } from 'reducers/todo';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAddTodo() {
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: ''
    });
  }

  handleChange(e) {
    if (e.keyCode === 13) {
      this.handleAddTodo(e.target.value);
    }
    this.setState({
      todo: e.target.value
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.todo}
        />
        <button
          onClick={() => {
            this.handleAddTodo();
          }}
        >
          Add
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(todoActions.addTodo(todo))
});

export default connect(undefined, mapDispatchToProps)(AddTodo);
