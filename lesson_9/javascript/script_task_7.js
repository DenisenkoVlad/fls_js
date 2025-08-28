"use strict"

if (confirm('Start test # 7')) {
	const lengthNum = parseInt(prompt('Введіть кількість елементів масиву', '8'))

	function getPricesList(arrLength) {
		let pricesList = []
		for (let i = 0; i < arrLength; i++) {
			const randPrice = 500 + Math.floor(Math.random() * 1001)
			pricesList.push(randPrice)
		}
		return pricesList
	}

	const prices = getPricesList(lengthNum)
	document.write(`Масив цін: ${prices}<br><br>`)

	const AFTER_DISCOUNT = 0.7
	prices.forEach(
		(price, i, arr) => {
			if (price > 1000) arr[i] = Math.round(price * AFTER_DISCOUNT)
		})
	document.write(`Новий змінений масив зі знижками: ${prices}`)
}