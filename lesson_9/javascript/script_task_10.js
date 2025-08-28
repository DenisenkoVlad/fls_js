"use strict"

if (confirm('Start test # 10')) {
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

	const TAX = 20
	const taxes = prices.map(price => Math.round(price * (TAX / 100)))

	document.write(`Масив податків із попередніх цін: ${taxes}`)
}