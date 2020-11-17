import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import dataobj from '../data.js'

const Bar = () => {
	const options = {
		chart: {
			type: 'bar',
		},
		title: {
			text: 'Sample Bar Chart',
		},

		xAxis: {},

		legend: {
			enabled: false,
		},

		series: [
			{
				name: 'Tokyo',
				data: dataobj.tokyo,
			},
			{
				name: 'London',
				data: dataobj.london,
			},
		],
	}

	return (
		<div>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	)
}

export default Bar
