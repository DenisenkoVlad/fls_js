"use strict"

if (confirm('Start test # 2')) {
	const lengthNum = parseInt(prompt('Введіть кількість елементів масиву', '8'))
	const halfArrLength = Math.floor(lengthNum / 2)
	let arr = new Array(lengthNum).fill(1, 0, halfArrLength).fill(7, halfArrLength)
	document.write(`${arr}`)
}