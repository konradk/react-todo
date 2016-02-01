import * as actionTypes from '../constants/actionTypes'

export function addTodo(text) {
	return {
		type: actionTypes.ADD_TODO,
		text
	}
}

export function toggleCompeted(index) {
	return {
		type: actionTypes.TOGGLE_COMPETED,
		index
	}
}
