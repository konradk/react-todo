import React, { Component, PropTypes } from 'react'

const List = ({ todos, handleKeyUp, handleClick }) => {
	return (
		<div>
			<h2>Todos</h2>
			<ul>
				{todos.map((todo, index) =>
					<li
						key={index}
						className={todo.done? 'completed' : ''}
						onClick={() => {
							handleClick(index)}
						}
					>
						<span>{todo.text}</span>
					</li>
				)}
			</ul>
			<textArea
				onKeyUp={handleKeyUp}
				placeholder="Add a todo">
			</textArea>
		</div>
	)
}

List.displayName = 'List'

export default List
