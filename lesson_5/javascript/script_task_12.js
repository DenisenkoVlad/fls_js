"use script"

if (confirm('Start test # 12')) {
	let banana = 0
	let cherry = 0
	let grape = 0
	let watermelon = 0
	document.write('<table><tr>')
	for (let i = 0; i < 3; i++) {
		let ranFruit = 1 + Math.floor(Math.random() * 4)
		let fruit
		switch (ranFruit) {
			case 1:
				fruit = `<img src="../img/task_12/banana.png">`
				banana++
				break;
			case 2:
				fruit = `<img src="../img/task_12/cherry.png">`
				cherry++
				break;
			case 3:
				fruit = `<img src="../img/task_12/grape.png">`
				grape++
				break;
			default:
				fruit = `<img src="../img/task_12/watermelon.png">`
				watermelon++
				break;
		}
		document.write(`<td>${fruit}</td>`)
	}
	document.write('</tr></table><br>')
	if (banana === 3)
		document.write('Вітаємо! Ви виграли 100 грн')
	else if (cherry === 3)
		document.write('Вітаємо! Ви виграли 200 грн')
	else if (grape === 3)
		document.write('Вітаємо! Ви виграли 500 грн')
	else if (watermelon === 3)
		document.write('Вітаємо! Ви виграли 1000 грн')
	else
		document.write('Ви програли...')
}


