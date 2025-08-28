"use strict"

if (confirm('Start test # 4')) {
	const lengthNum = parseInt(prompt('Введіть кількість елементів масиву', '8'))

	function getArr(arrLength) {
		let randArr = []
		for (let i = 0; i < arrLength; i++) {
			const randItem = 1 + Math.floor(Math.random() * 200)
			randArr.push(randItem)
		}
		return randArr
	}

	const arr = getArr(lengthNum)
	document.write(`Масив: ${arr}<br><br>`)
	document.write('Елементи більші за 100:<br>')
	for (const num of arr) {
		if (num > 100) document.write(`${num}<br>`)
	}
}