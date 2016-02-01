import * as actionTypes from '../constants/actionTypes'

export default function rootReducer(state = {
	todos: []

}, action) {
	switch (action.type) {
			case actionTypes.ADD_TODO:
				return {
					...state,
					todos: [
						...state.todos,
						{
							text: action.text,
							done: false
						}
					]
				}
			case actionTypes.TOGGLE_COMPETED:
				return {
					...state,
					todos: state.todos.map((todo, index) => {
						if (index === action.index) {
							return Object.assign({}, todo, {done: !todo.done})
						}
						return todo
					})
				}
			default:
				return state
	}
	return state
}

export default rootReducer
