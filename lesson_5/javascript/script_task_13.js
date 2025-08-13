"use script"

if (confirm('Start test # 13')) {
	const x = parseInt(prompt('Введіть кількість клітинок поля по горизонталі (x)', '3'))
	const y = parseInt(prompt('Введіть кількість клітинок поля по вертикалі (y)', '3'))
	const bullet = parseInt(prompt('Введіть кількість снарядів (спроб)', '4'))
	let shipX = 1 + Math.floor(Math.random() * x)
	let shipY = 1 + Math.floor(Math.random() * y)
	let shotX
	let shotY
	for (let attempt = 1; attempt <= bullet; attempt++) {
		shotX = parseInt(prompt(`Введіть координати по горизонталі в межах 1-${x}`, '2'))
		shotY = parseInt(prompt(`Введіть координати по вертикалі в межах 1-${y}`, '2'))
		if (shotX === shipX && shotY === shipY) {
			document.write('Вітаємо! Ви влучили!')
			break
		} else if (bullet === attempt) break
		else alert(`Не влучили. Залишилось спроб: ${bullet - attempt}`)
	}
	if (shotX !== shipX || shotY !== shipY)
		document.write('Ви не знайшли корабель')
}


