"use strict"

if (confirm('Start test # 1')) {
	function getScoreArr(schoolSubjectNumber) { // Функція рандомного заповнення масиву оцінками 2-5
		const scoreArr = []
		for (let i = 0; i < schoolSubjectNumber; i++) {
			const randScore = 2 + Math.floor(Math.random() * 4)
			scoreArr.push(randScore)
		}
		return scoreArr
	}

	function getAvgScore(arr) { // Функція отримання середньої оцінки
		let sumScore = 0
		for (let i = 0; i < arr.length; i++) {
			sumScore += arr[i]
		}
		const avgScore = sumScore / arr.length
		return avgScore
	}

	function getStatus(arr) { // Функція визначення категорії (статусу) учня
		let status
		let min = arr[0]
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] < min) min = arr[i]
		}
		for (let i = 0; i < arr.length; i++) {
			if (min === 2) status = 'Двійочник'
			else if (min === 3) status = 'Трійочник'
			else if (min === 4) status = 'Хорошист'
			else status = 'Відмінник'
		}
		return status
	}

	const schoolSubjects = parseInt(prompt('Введіть кількість предметів', '3'))
	const scores = getScoreArr(schoolSubjects)
	document.write(`Оцінки: ${scores}<br>`)

	const avg = getAvgScore(scores)
	document.write(`Середня оцінка: ${avg.toFixed(2)}<br>`)

	const studentStatus = getStatus(scores)
	document.write(`Учень: ${studentStatus}<br>`)
}