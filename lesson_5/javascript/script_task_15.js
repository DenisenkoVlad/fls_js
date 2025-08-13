"use script"

if (confirm('Start test # 15')) {
	let sumTemp = 0
	let month
	for (month = 1; month <= 12; month++) {
		const temp = parseInt(prompt(`Введіть температуру за ${month}-й місяць`, '15'))
		sumTemp += temp
		document.write(`${month}-й місяць - ${temp} °C<br>`)
	}
	let avgTemp = sumTemp / (--month)
	document.write(`<h4>Середня температура за рік: ${avgTemp.toFixed(1)} °C</h4>`)
}


