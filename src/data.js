const data = [
	{ city: 'Tokyo', date: '2020-01-01', value: 7.0 },
	{ city: 'Tokyo', date: '2020-02-01', value: 6.9 },
	{ city: 'Tokyo', date: '2020-03-01', value: 9.5 },
	{ city: 'Tokyo', date: '2020-04-01', value: 14.5 },
	{ city: 'Tokyo', date: '2020-05-01', value: 18.4 },
	{ city: 'Tokyo', date: '2020-06-01', value: 21.5 },
	{ city: 'Tokyo', date: '2020-07-01', value: 25.2 },
	{ city: 'Tokyo', date: '2020-08-01', value: 26.5 },
	{ city: 'Tokyo', date: '2020-09-01', value: 23.3 },
	{ city: 'Tokyo', date: '2020-10-01', value: 18.3 },
	{ city: 'Tokyo', date: '2020-11-01', value: 13.9 },
	{ city: 'Tokyo', date: '2020-12-01', value: 9.6 },
	{ city: 'London', date: '2020-01-01', value: 3.9 },
	{ city: 'London', date: '2020-02-01', value: 4.2 },
	{ city: 'London', date: '2020-03-01', value: 5.7 },
	{ city: 'London', date: '2020-04-01', value: 8.5 },
	{ city: 'London', date: '2020-05-01', value: 11.9 },
	{ city: 'London', date: '2020-06-01', value: 15.2 },
	{ city: 'London', date: '2020-07-01', value: 17.0 },
	{ city: 'London', date: '2020-08-01', value: 16.6 },
	{ city: 'London', date: '2020-09-01', value: 14.2 },
	{ city: 'London', date: '2020-10-01', value: 10.3 },
	{ city: 'London', date: '2020-11-01', value: 6.6 },
	{ city: 'London', date: '2020-12-01', value: 4.8 },
]

var tokyoData = data.filter((e) => {
	return e.city === 'Tokyo'
})
tokyoData = tokyoData.map((e) => e.value)

var londonData = data.filter((e) => {
	return e.city === 'London'
})
londonData = londonData.map((e) => e.value)

console.log(tokyoData)
console.log(londonData)

const dataobj = {
	data: data,
	london: londonData,
	tokyo: tokyoData,
}

export default dataobj
