import React from 'react'

const Input = ({id, name, value, handlerTable}) => {
	if(name === 'campaign_name') {
		return (
				<input id={id} type="text" name={name} value={value} onChange={handlerTable}/>
		)
	} else if(name === 'adwords_status') {
		return (
			<select id={id} name={name} value={value} onChange={handlerTable}>
				<option value="Running">Running</option>
				<option value="Paused">Paused</option>
			</select>
		)
	} else {
		return value
	}
}

export default Input