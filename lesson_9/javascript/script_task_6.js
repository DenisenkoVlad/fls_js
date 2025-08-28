"use strict"

if (confirm('Start test # 6')) {
	const lengthNum = parseInt(prompt('Введіть кількість елементів масиву', '8'))

	function getArr(arrLength) {
		let randArr = []
		for (let i = 0; i < arrLength; i++) {
			const randItem = 1 + Math.floor(Math.random() * 10)
			randArr.push(randItem)
		}
		return randArr
	}

	const arr = getArr(lengthNum)
	document.write(`Масив: ${arr}<br><br>`)

	arr.forEach(
		(num, i, arr) => {
			if (num > arr[0]) arr[i] *= 2
		}
	)
	document.write(`Новий змінений масив: ${arr}`)
}