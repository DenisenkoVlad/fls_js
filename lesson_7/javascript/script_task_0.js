"use strict"

if (confirm('Start test # 0')) {
	const month = parseInt(prompt('Введіть номер місяця від 1 до 12', '3'))
	let season
	function getSeason(monthNum) {
		if (monthNum <= 0 || monthNum > 12)
			season = 'Не вірно вказаний номер місяця'
		else if (monthNum <= 2 || monthNum === 12)
			season = 'Зима'
		else if (monthNum <= 5)
			season = 'Весна'
		else if (monthNum <= 8)
			season = 'Літо'
		else
			season = 'Осінь'
		return season
	}
	let res = getSeason(month)
	document.write(`Місяць № ${month}<br>Пора року - ${res}`)
}