import React from 'react'

const Filter = ({handler, columns}) => {
	console.log("Filter columns: ", columns)
	return (
		
		Object.keys(columns).map(col => {
			return (
				<div key={col} className="filter--cols">
					<input type="checkbox" name={col} onChange={handler} value={columns[col]} checked={columns[col]} />
					<label>{col} | </label>
				</div>
			)
		})
	)
}

export default Filter