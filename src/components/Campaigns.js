import React from 'react'

const Campaigns = ({campaigns, columns, handlerCampaignName}) => {
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
									{
										columnsKeys.map(column => {
											if(column === 'campaign_name') {
												return (
													<td key={column}>
														<input id={campaign.id} value={campaign[column]} onChange={handlerCampaignName}/>
													</td>
												)
											} 
											else {
												return <td key={column}>{campaign[column]}</td>
											}
										})
									}
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