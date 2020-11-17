import React from 'react'
import Line from './Line'
import Bar from './Bar'

const Charts = () => {
	return (
		<div className='container'>
			<div className='line-container'>
				<Line className='line-graph' />
			</div>
			<div className='blank'></div>
			<div className='bar-container'>
				<Bar className='bar-graph' />
			</div>
		</div>
	)
}

export default Charts
