"use script"

if (confirm('Start test # 8')) {
	const randomizerVariations = parseInt(prompt(`Введіть кількість випадкових чисел для гри`, '10'))

	function getRandomizerArr(randomizerVariationsNumber) { // Функція рандомного заповнення масиву з виграшними сумами від -500 до 500
		let randomizerArr = []
		for (let i = 0; i < randomizerVariationsNumber; i++) {
			const minPrize = -500
			const maxPrize = 500
			const randPrize = minPrize + Math.floor(Math.random() * (maxPrize - minPrize + 1))
			randomizerArr.push(randPrize)
		}
		return randomizerArr
	}

	const randomizer = getRandomizerArr(randomizerVariations)
	document.write(`Randomizer: ${randomizer}<br>`)

	function getFinalSum(arr) { // Функція проведення гри з можливістю зупинки
		let finalSum = 0
		do {
			const attempt = parseInt(prompt(`Введіть число від 1 до ${randomizer.length}`, '1'))
			finalSum += arr[attempt - 1]
		}
		// Загальна сума виграшу показуватиметься користувачу після кожного вибору
		while (confirm(`Ваш виграш станом на зараз становить: ${finalSum} грн. Бажаєте продовжити?`))
		return finalSum
	}

	const game = getFinalSum(randomizer)
	document.write(`Виграш: ${game}`)
}