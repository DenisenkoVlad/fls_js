"use script"

if (confirm('Start test # 6')) {
	function getProductsPrices(arrLength) { // Функція рандомного заповнення масиву цінами 1-400
		let productsPricesArr = []
		for (let i = 0; i < arrLength; i++) {
			const randPrice = 1 + Math.floor(Math.random() * 400)
			productsPricesArr.push(randPrice)
		}
		return productsPricesArr
	}

	function getSolvency(arr, moneyAmount) { // Функція перевіряє спроможність заплатити за товар і повертає масив зі списком цих товарів
		let solvencyArr = []
		for (let i = 0; i < arr.length; i++) {
			if (moneyAmount > arr[i]) solvencyArr.push(productsTitles[i])
		}
		return solvencyArr
	}

	const money = prompt('Введіть суму грошей', '250')
	const productsTitles = ['Сир', "М'ясо", 'Хліб']
	document.write(`Список товарів: ${productsTitles}<br>`)
	const productsPrices = getProductsPrices(productsTitles.length)
	document.write(`Відповідний список цін: ${productsPrices}<br><br>`)
	document.write(`Сума Ваших грошей = ${money}<br>`)
	const solvency = getSolvency(productsPrices, money)
	document.write(`Ви можете собі дозволити товаи з цього списку: ${solvency}`)
}