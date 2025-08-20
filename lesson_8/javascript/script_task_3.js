"use script"

if (confirm('Start test # 3')) {
	function getNamesList(namesNumber) { // Функція заповнення імен по запиту від користувача
		let namesArr = []
		for (let i = 1; i <= namesNumber; i++) {
			const inputName = prompt(`Введіть ${i}-е ім'я`, 'Іван').toLowerCase()
			namesArr.push(inputName)
		}
		return namesArr
	}

	function getIvanNum(arr) { // Функція порівняння відповідей користувача з масиву з іменем Іван і підрахунок кількості
		let ivanCount = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === 'іван') ivanCount++
		}
		return ivanCount
	}

	const names = parseInt(prompt('Введіть кількість імен', '4'))
	const arr = getNamesList(names)
	document.write(`Імена: ${arr}<br>`)
	const res = getIvanNum(arr)
	document.write(`Кількість Іванів: ${res}<br>`)
}