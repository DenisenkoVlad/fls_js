"use strict"

if (confirm('Start test # 3')) {
	const lengthNum = parseInt(prompt('Введіть кількість елементів масиву', '8'))
	let arr = new Array(lengthNum)
	arr.fill(1, 0, 5)
	arr.fill(7, 5)
	document.write(`${arr}`)
}