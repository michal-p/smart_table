import React from 'react'
import Input from './Input'

const Campaigns = ({campaigns, columns, handlerTable}) => {
	const columnsKeys = Object.keys(columns).filter(col => columns[col])
	return (
		<table>
			<thead>
				<tr>
					{columnsKeys.map(column => <th key={column}>{column}</th>)}
				</tr>
			</thead>
			<tbody>
				{campaigns.map(campaign => {
					return (
						<tr key={campaign.id}>
							{columnsKeys.map(column => {
								return (
									<td key={column}>
										<Input id={campaign.id} name={column} value={campaign[column]} handlerTable={handlerTable} />
									</td>
								)
							})}
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}

export default Campaigns