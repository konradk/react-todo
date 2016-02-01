import React from 'react'
import { render } from 'react-dom'

import TodoApp from './containers/TodoApp'
import configureStore from './store/configureStore'

const store = configureStore()

render(
	<TodoApp store={store}/>,
	document.getElementById('todoapp')
)
