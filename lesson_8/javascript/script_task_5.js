"use script"

if (confirm('Start test # 5')) {
	function getScoreArr(schoolSubjectNumber) { // Функція рандомного заповнення масиву оцінками 2-5
		const scoreArr = []
		for (let i = 0; i < schoolSubjectNumber; i++) {
			const randScore = 2 + Math.floor(Math.random() * 4)
			scoreArr.push(randScore)
		}
		return scoreArr
	}

	function getPoorGradeNum(arr) { // Функція рахує кількість двійок в масиві оцінок
		let poorGradeCount = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === 2) poorGradeCount++
		}
		return poorGradeCount
	}
	function getGoodGradeNum(arr) { // Функція рахує кількість хороших оцінок (4-5) в масиві оцінок
		let goodGradeCount = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] >= 4) goodGradeCount++
		}
		return goodGradeCount
	}

	function getAvgScore(arr) { // Функція отримання середньої оцінки
		let sumScore = 0
		for (let i = 0; i < arr.length; i++) {
			sumScore += arr[i]
		}
		const avgScore = sumScore / arr.length
		return avgScore
	}

	function getScoreBelowAvg(arr, avg) { // Функція отримання оцінкок нижче середнього
		let scoreBelowAvgCount = 0
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < avg) scoreBelowAvgCount++
		}
		return scoreBelowAvgCount
	}

	const schoolSubjects = parseInt(prompt('Введіть кількість предметів', '10'))
	const scores = getScoreArr(schoolSubjects)
	document.write(`Оцінки: ${scores}<br>`)
	const poorGrade = getPoorGradeNum(scores)
	document.write(`Кількість двійок: ${poorGrade}<br>`)
	const goodGrade = getGoodGradeNum(scores)
	document.write(`Кількість хороших оцінок (4-5): ${goodGrade}<br>`)
	const avgScoreNum = getAvgScore(scores)
	const gradeBelowAvg = getScoreBelowAvg(scores, avgScoreNum)
	document.write(`кількість оцінок, які нижче середнього (середнє = ${avgScoreNum}): ${gradeBelowAvg}`)
}


