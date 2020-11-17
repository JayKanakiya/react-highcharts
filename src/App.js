import logo from './logo.svg'
import './App.css'
import Grid from './components/Grid'
import Charts from './components/Charts'
function App() {
	return (
		<div className='App'>
			<h1>HighCharts Graph Plot using ReactJS</h1>
			<div>
				<Grid />
				<Charts />
			</div>
		</div>
	)
}

export default App
