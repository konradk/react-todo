import React, { Component, PropTypes } from 'react'
import List from 'material-ui/lib/lists/list'
import ListItem from 'material-ui/lib/lists/list-item'
import Paper from 'material-ui/lib/paper'
import TextField from 'material-ui/lib/text-field'
import Divider from 'material-ui/lib/divider'
import IconButton from 'material-ui/lib/icon-button'
import Add from 'material-ui/lib/svg-icons/content/add'

const MaterialList = ({ todos, handleKeyUp, handleClick }) => {
	return (
		<Paper style={{marginTop: '2em'}}>
			<TextField
				hintText="Add a todo"
				onKeyDown={handleKeyUp}
				underlineStyle={{
					borderBottom: '0'
				}}
				style={{
					padding: '0 16px',
				}}
			/>
			<IconButton
				style={{float: 'right', display: 'block'}}
			>
				<Add />
			</IconButton>
			<Divider/>
			<List>
				{todos.map((todo, index) =>
					<div key={index}>
						<ListItem
							style={todo.done ? {textDecoration: 'line-through', color: '#ccc'} : null}
							onClick={() => {
								handleClick(index)}
							}
							primaryText={todo.text}
						/>
						<Divider/>
					</div>
				)}
			</List>
		</Paper>
	)
}

MaterialList.displayName = 'MaterialList'

export default MaterialList
