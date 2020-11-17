import React, { useState } from 'react'
import dataobj from '../data.js'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css'

const Grid = () => {
	const [rowData, setRowData] = useState(dataobj.data)

	return (
		<div>
			{rowData.length > 0 ? (
				<div
					className='ag-theme-alpine center'
					style={{ height: 400, width: 600 }}
				>
					<AgGridReact rowData={dataobj.data}>
						<AgGridColumn
							field='city'
							filter={true}
							sortable={false}
						></AgGridColumn>
						<AgGridColumn
							field='date'
							filter={true}
							sortable={false}
						></AgGridColumn>
						<AgGridColumn
							field='value'
							filter={true}
							sortable={false}
						></AgGridColumn>
					</AgGridReact>
				</div>
			) : (
				<h1>Loading</h1>
			)}
		</div>
	)
}

export default Grid
