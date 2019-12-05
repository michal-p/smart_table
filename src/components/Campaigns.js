import React from 'react'

const Campaigns = ({campaigns, columns}) => {
	columns = Object.keys(columns)
	if(columns.length) {
		return (
			<table>
				<thead>
					<tr>
						{columns.map(column => <th key={column}>{column}</th>)}
					</tr>
				</thead>
				<tbody>
					{
						campaigns.map(campaign => {
							return (
								<tr key={campaign.id}>
									{columns.map(column => <td key={column}>{campaign[column]}</td>)}
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