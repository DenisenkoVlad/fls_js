"use script"

if (confirm('Start test # 1')) {
	const userNum = parseInt(prompt('Введіть кількість пунктів меню', '5'))
	document.write(`<ul><br>`)
	for (let i = 1; i <= userNum; i++) {
		let randNum = 1 + Math.floor(Math.random() * 100)
		document.write(`<li>${randNum}</li> <br>`)
	}
	document.write(`</ul><br>`)
}
