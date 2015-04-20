import React, { PropTypes as ReactPropTypes } from "react";
import TodoActions from "../actions/TodoActions";
import TodoItem from "./TodoItem.react";

class MainSection extends React.Component {
  /**
   * @return {object}
   */
  render = () => {
    // This section should be hidden by default
    // and shown when there are todos.
    if (Object.keys(this.props.allTodos).length < 1) {
      return null;
    }

    var allTodos = this.props.allTodos;
    var todos = [];

    for (var key in allTodos) {
      todos.push(<TodoItem key={key} todo={allTodos[key]} />);
    }

    return (
      <section id="main">
        <input
          id="toggle-all"
          type="checkbox"
          onChange={this._onToggleCompleteAll}
          checked={this.props.areAllComplete ? 'checked' : ''} />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul id="todo-list">{todos}</ul>
      </section>
    );
  }

  /**
   * Event handler to mark all todos complete
   */
  _onToggleCompleteAll = () => {
    TodoActions.toggleCompleteAll();
  }
}

MainSection.propTypes = {
  allTodos: ReactPropTypes.object.isRequired,
  areAllComplete: ReactPropTypes.bool.isRequired
};

export default MainSection;
