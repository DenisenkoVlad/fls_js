"use strict"

if (confirm('Start test # 6')) {
	// Блок рандомної генерації цін за 12 місяців
	const ARR_LENGTH = 12
	function getArr(arrLength) {
		let randArr = []
		for (let i = 0; i < arrLength; i++) {
			const randItem = 1 + Math.floor(Math.random() * 10000)
			randArr.push(randItem)
		}
		return randArr
	}
	const arr = getArr(ARR_LENGTH)
	document.write(`Ціни на цінні папери за 12 місяців: ${arr}<br><br>`)

	// Блок 1 - Новий масив, у якому є тільки ті, що більші за 1000 грн
	const arr1000Plus = arr.filter(num => num > 1000)
	document.write(`1. Новий масив, у якому є тільки ті, що більші за 1000 грн: ${arr1000Plus}<br>`)

	// Блок 2 - Новий масив, у якому є номери тільки тих, що більші за 1000 грн
	const arrIndex1000Plus = []
	arr.forEach((num, i) => {
		if (num > 1000) arrIndex1000Plus.push(i)
	}
	)
	document.write(`2. Новий масив, у якому є номери тільки тих, що більші за 1000 грн: ${arrIndex1000Plus}<br>`)

	// Блок 3 - Список з тих цін, які більші за попереднє значення
	const arrNextBiggestThanPrev = []
	arr.forEach((num, i, arr) => {
		if (arr[i + 1] > num) arrNextBiggestThanPrev.push(arr[i + 1])
	}
	)
	document.write(`3. Список з тих цін, які більші за попереднє значення: ${arrNextBiggestThanPrev}<br>`)

	// Блок 4 - Новий масив, що міститиме значення цін у відсотках стосовно максимального
	const maxValue = Math.max(...arr)
	const arrPercentegesOfMaxValue = arr.map(num => Math.round((num / maxValue) * 100))
	document.write(`4. Новий масив, що міститиме значення цін у відсотках стосовно максимального: ${arrPercentegesOfMaxValue}<br>`)

	// Блок 5 - Підрахувати кількість змін цін
	let priceChangeCount = 0
	arr.reduce((prevPrice, currentPrice) => {
		if (currentPrice !== prevPrice) priceChangeCount++
	}
	)
	document.write(`5. Кількість змін цін: ${priceChangeCount}<br>`)

	// Блок 6 - Визначити, чи є ціна, що менше 1000
	const someContain1000Plus = arr.some(num => num < 1000)
	document.write(`6. Чи є ціна, що менше 1000: ${someContain1000Plus}<br>`)

	// Блок 7 - Визначати, чи усі ціни більше за 1000
	const every1000Plus = arr.every(num => num > 1000)
	document.write(`7. Чи усі ціни більше за 1000: ${every1000Plus}<br>`)

	// Блок 8 - Підрахувати кількість цін, що більше за 1000
	let price1000PlusCount = 0
	for (const num of arr) {
		if (num > 1000) price1000PlusCount++
	}
	document.write(`8. Кількість цін, що більше за 1000: ${price1000PlusCount}<br>`)

	// Блок 9 - Підрахувати суму цін, що більше за 1000
	let price1000PlusSum = arr.reduce((prevPrice, currentPrice) => {
		return currentPrice > 1000 ? prevPrice + currentPrice : prevPrice
	}, 0)
	document.write(`9. Суму цін, що більше за 1000: ${price1000PlusSum}<br>`)

	// Блок 10 - Знайти першу ціну, що більше за 1000
	const first1000Plus = arr.find(num => num > 1000)
	document.write(`10. Перша ціна, що більше за 1000: ${first1000Plus}<br>`)

	// Блок 11 - Знайти індекс першої ціни, що більше за 1000
	const firstIndex1000Plus = arr.findIndex(num => num > 1000)
	document.write(`11. Індекс першої ціни, що більше за 1000: ${firstIndex1000Plus}<br>`)

	// Блок 12 - Знайти останню ціну, що більше за 1000
	const last1000Plus = arr.findLast(num => num > 1000)
	document.write(`10. Остання ціна, що більше за 1000: ${last1000Plus}<br>`)

	// Блок 13 - Знайти індекс останньої ціни, що більше за 1000
	const lastIndex1000Plus = arr.findLastIndex(num => num > 1000)
	document.write(`11. Індекс останньої ціни, що більше за 1000: ${lastIndex1000Plus}`)
}