"use script"

if (confirm('Start test # 4')) {
	function getPlatesList(platesNumber) { // Функція заповнення номерів по запиту від користувача
		let platesArr = []
		for (let i = 1; i <= platesNumber; i++) {
			const inputPlate = prompt(`Введіть ${i}-й номер авто`, 'АI1234OА').toUpperCase()
			platesArr.push(inputPlate)
		}
		return platesArr
	}

	function getFirstACount(arr) { // Функція рахує, скільки елементів масиву починаються на А
		let firstACountCount = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][0] === 'А') firstACountCount++
		}
		return firstACountCount
	}

	function getFirstAndLastCount(arr) {  // Функція рахує, скільки елементів масиву починаються і закінчуються на однаковий символ
		let firstAndLastCount = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i][0] === arr[i][arr[i].length - 1]) firstAndLastCount++
		}
		return firstAndLastCount
	}

	function getFivePlusCount(arr) { // Функція рахує, скільки елементів масиву складаються з більше ніж п'яти символів
		let fivePlusCount = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i].length > 5) fivePlusCount++
		}
		return fivePlusCount
	}

	const plates = parseInt(prompt('Введіть кількість номерів', '4'))
	const arr = getPlatesList(plates)
	document.write(`Номера автівок: ${arr}<br>`)
	const firstA = getFirstACount(arr)
	document.write(`починаються на букву «А»: ${firstA}<br>`)
	const firstAndLast = getFirstAndLastCount(arr)
	document.write(`Перша і остання літери співпадають: ${firstAndLast}<br>`)
	const fivePlus = getFivePlusCount(arr)
	document.write(`Складаються з більше ніш 5 символів: ${fivePlus}<br>`)
}