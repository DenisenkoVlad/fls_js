"use strict"

if (confirm('Start test # 5')) {
	const lengthNum = parseInt(prompt('Введіть кількість елементів масиву', '8'))

	function getArr(arrLength) {
		let randArr = []
		for (let i = 0; i < arrLength; i++) {
			const randItem = -50 + Math.floor(Math.random() * 101)
			randArr.push(randItem)
		}
		return randArr
	}

	const arr = getArr(lengthNum)
	document.write(`Масив: ${arr}<br><br>`)

	let product = 1
	for (const num of arr) {
		if (num > 0) product *= num
	}
	document.write(`Добуток додатних елементів: ${product}`)
}