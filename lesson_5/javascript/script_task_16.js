"use script"

if (confirm('Start test # 16')) {
	const weekNum = parseInt(prompt('Введіть кількість тижнів', '3'))
	let overallProfit = 0
	let weekProfit = 0
	for (let week = 1; week <= weekNum; week++) {
		for (let day = 1; day <= 7; day++) {
			const dayProfit = parseInt(prompt(`Введіть прибуток ${day}-го дня ${week}-го тижня`, '10000'))
			weekProfit += dayProfit
		}
		document.write(`Прибуток за ${week}-й тиждень = ${weekProfit} грн (по ${(weekProfit / 7).toFixed(2)} грн в день)<br>`)
		overallProfit += weekProfit
		weekProfit = 0
	}
	document.write(`<br>Загальний прибуток за весь період (кількість тижнів: ${weekNum}) склав = ${overallProfit} грн (по ${(overallProfit / (weekNum * 7)).toFixed(2)} грн в день)`)
}


