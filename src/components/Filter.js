import React from 'react'

const Filter = ({handler, columns}) => {
	return (
		Object.keys(columns).map(col => {
			return (
				<div key={col}>
					<input type="checkbox" name={col} onChange={handler} checked={columns[col]} />
					<label>{col} | </label>
				</div>
			)
		})
	)
}

export default Filter