"use strict"

if (confirm('Start test # 1')) {
	const lengthNum = parseInt(prompt('Введіть кількість елементів масиву', '8'))
	let arr = new Array(lengthNum).fill(0)
	document.write(`${arr}`)
}