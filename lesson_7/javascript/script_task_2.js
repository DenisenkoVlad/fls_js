"use strict"

if (confirm('Start test # 2')) {
	const dayNum = parseInt(prompt('Введіть день тижня від 1 до 7', '3'))
	let dayStatus
	function getDayStatus(workOrWeekend) {
		switch (workOrWeekend) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				dayStatus = 'Work'
				break;
			case 6:
			case 7:
				dayStatus = 'Weekend'
				break;
			default:
				dayStatus = 'Не вірно вказаний день тижня'
				break;
		}
		return dayStatus
	}
	let res = getDayStatus(dayNum)
	document.write(`Day # ${dayNum} - ${res}`)
}