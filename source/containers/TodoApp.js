import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions/actions.js'
import MaterialList from '../components/MaterialList'
import List from '../components/List'
import injectTapEventPlugin from 'react-tap-event-plugin'


class TodoApp extends Component {
	displayName = 'TodoApp';

	static propTypes = {
		actions: PropTypes.objectOf(PropTypes.func),
		todos: PropTypes.arrayOf(PropTypes.object)
	};

	constructor() {
		super()
		injectTapEventPlugin()
	}

	handleKeyUp(event) {
		const todoText = event.target.value.trim()
		if (event.keyCode == 13 && todoText){
			this.props.actions.addTodo(todoText)
			event.target.value = ''
		}
	}

	handleClick(index) {
		this.props.actions.toggleCompeted(index)
	}

	render() {
		const { actions, todos } = this.props

		return (
			<div>
				<div className="panel">
					<List todos={todos} handleKeyUp={this.handleKeyUp.bind(this)} handleClick={this.handleClick.bind(this)} />
				</div>
				<div className="panel">
					<MaterialList todos={todos} handleKeyUp={this.handleKeyUp.bind(this)} handleClick={this.handleClick.bind(this)} />
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		todos: state.todos
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
