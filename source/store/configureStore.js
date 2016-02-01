import { createStore, compose } from 'redux'
import rootReducer from '../reducers'

const finalCreateStore = compose(
	window.devToolsExtension ? window.devToolsExtension() : fn => fn
)(createStore)

export default function configureStore(initialState = {
	todos: [
		{text: "work hard", done: false}
	]
}) {
	const store = finalCreateStore(rootReducer, initialState)

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers')
			store.replaceReducer(nextRootReducer)
		})
	}

	return store
}
