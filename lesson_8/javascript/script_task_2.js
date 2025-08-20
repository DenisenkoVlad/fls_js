"use strict"

if (confirm('Start test # 2')) {
	function getWeekVisitingArr() { // Функція рандомного заповнення масиву відвідувачами 10-30
		const weekVisitingArr = []
		for (let i = 0; i < 7; i++) {
			const randVisitors = 10 + Math.floor(Math.random() * 21)
			weekVisitingArr.push(randVisitors)
		}
		return weekVisitingArr
	}

	function getaysLessVisitorsThanList(arr, lessThanNum) { // Функція заповнює масив днями з <20 відвідувачами
		let daysLessVisitorsThanList = []
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < lessThanNum) daysLessVisitorsThanList.push(` ${i + 1}-й`)
		}
		return daysLessVisitorsThanList
	}

	function getDaysWithMinVisitors(arr) { // Функція повертає масив з днем (днями) з мінімальною кількістю відвідувачів
		let min = arr[0]
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] < min) min = arr[i]
		}
		let daysWithMinVisitorsList = []
		for (let i = 0; i < arr.length; i++) { // Заповнення масиву номерами днів, які відповідають мінімальній кількості відвідувачів
			if (arr[i] === min) daysWithMinVisitorsList.push(` ${i + 1}-й`)
		}
		return daysWithMinVisitorsList
	}

	function getDaysWithMaxVisitors(arr) { // Функція повертає масив з днем (днями) з максимальною кількістю відвідувачів
		let max = arr[0]
		for (let i = 1; i < arr.length; i++) {
			if (arr[i] > max) max = arr[i]
		}
		let daysWithMaxVisitorsList = []
		for (let i = 0; i < arr.length; i++) { // Заповнення масиву номерами днів, які відповідають максимальній кількості відвідувачів
			if (arr[i] === max) daysWithMaxVisitorsList.push(` ${i + 1}-й`)
		}
		return daysWithMaxVisitorsList
	}

	function getWorkDaysVisiors(arr) { // Функція сумує кількість відвідувачів за будні дні (1-5)
		let workDaysVisitorsCount = 0
		for (let i = 0; i < 5; i++) {
			workDaysVisitorsCount += arr[i]
		}
		return workDaysVisitorsCount
	}

	function getWeekendVisiors(arr) { // Функція сумує кількість відвідувачів за вихідні дні (6-7)
		let WeekendVisitorsCount = 0
		for (let i = 5; i < arr.length; i++) {
			WeekendVisitorsCount += arr[i]
		}
		return WeekendVisitorsCount
	}

	const weekVisitors = getWeekVisitingArr()
	document.write(`Відвідувачі по дням: ${weekVisitors}<br>`)
	const daysLess20 = getaysLessVisitorsThanList(weekVisitors, 20)
	document.write(`Номери днів, протягом яких кількість відвідувачів була меншою за 20: ${daysLess20}<br>`)
	const daysWithMinVisitors = getDaysWithMinVisitors(weekVisitors)
	document.write(`Номер дня (днів), коли кількість відвідувачів була мінімальною: ${daysWithMinVisitors}<br>`)
	const daysWithMaxVisitors = getDaysWithMaxVisitors(weekVisitors)
	document.write(`Номер дня (днів), коли кількість відвідувачів була максимальною: ${daysWithMaxVisitors}<br>`)
	const workDaysVisitors = getWorkDaysVisiors(weekVisitors)
	document.write(`Відвідувачів у будні дні: ${workDaysVisitors}<br>`)
	const WeekendVisitors = getWeekendVisiors(weekVisitors)
	document.write(`Відвідувачів у вихідні дні: ${WeekendVisitors}<br>`)
}