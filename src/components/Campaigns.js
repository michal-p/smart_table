import React from 'react'

const Campaigns = ({campaigns, columns}) => {
	const columnsKeys = Object.keys(columns).filter(col => columns[col])
	if(columnsKeys.length) {
		return (
			<table>
				<thead>
					<tr>
						{columnsKeys.map(column => <th key={column}>{column}</th>)}
					</tr>
				</thead>
				<tbody>
					{
						campaigns.map(campaign => {
							return (
								<tr key={campaign.id}>
									{columnsKeys.map(column => <td key={column}>{campaign[column]}</td>)}
								</tr>
							)
						})
					}
				</tbody>
			</table>
		)
	} else {
		return <></>
	}
}

export default Campaigns