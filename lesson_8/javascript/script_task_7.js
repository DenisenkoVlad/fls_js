"use script"

if (confirm('Start test # 7')) {
	function getAnnualReport() { // Функція рандомного заповнення масиву з 12-ма місяцними звітами
		let annualReportArr = []
		for (let i = 0; i < 12; i++) {
			const randReceipt = 10000 + Math.floor(Math.random() * 20001)
			annualReportArr.push(randReceipt)
		}
		return annualReportArr
	}
	function getSumYear(arr) { // Функція рахує річний прибуток
		let sumYear = 0
		for (let i = 0; i < arr.length; i++) {
			sumYear += arr[i]
		}
		return sumYear
	}
	function getFirstHalf(arr) { // Функція рахує прибуток за перше півріччя
		let sumFirstHalf = 0
		let halfYear = arr.length / 2
		for (let i = 0; i < halfYear; i++) {
			sumFirstHalf += arr[i]
		}
		return sumFirstHalf
	}
	function getSummer(arr) { // Функція рахує прибуток за літо
		let sumSummer = 0
		for (let i = 5; i < 8; i++) {
			sumSummer += arr[i]
		}
		return sumSummer
	}
	function getSecondQuarter(arr) { // Функція рахує прибуток за другий квартал
		let sumSecondQuarter = 0
		for (let i = 2; i < 5; i++) {
			sumSecondQuarter += arr[i]
		}
		return sumSecondQuarter
	}
	function getEvenMonth(arr) { // Функція рахує прибуток за парні місяці
		let sumEvenMonth = 0
		for (let i = 1; i < arr.length; i += 2) {
			sumEvenMonth += arr[i]
		}
		return sumEvenMonth
	}
	function getFirstSeasonMonth(arr) { // Функція рахує прибуток за місяці, які є початковими у сезоні (весна, літо, осінь, зима)
		let sumFirstSeasonMonth = 0
		let firstWinterMonth = arr.length - 1
		for (let i = firstWinterMonth; i >= 0; i -= 3) {
			sumFirstSeasonMonth += arr[i]
		}
		return sumFirstSeasonMonth
	}

	const annualReport = getAnnualReport()

	// Тут трохи полінився і вивів результати виконання функцій одразу в document.write
	document.write(`Річний звіт по місяцях: ${annualReport}<br>`)
	document.write(`Сума за рік: ${getSumYear(annualReport)}<br>`)
	document.write(`Сума за перше півріччя: ${getFirstHalf(annualReport)}<br>`)
	document.write(`Сума за друге півріччя: ${getSumYear(annualReport) - getFirstHalf(annualReport)}<br>`)
	document.write(`Сума за літо: ${getSummer(annualReport)}<br>`)
	document.write(`Сума за другий квартал: ${getSecondQuarter(annualReport)}<br>`)
	document.write(`Сума за парні місяці: ${getEvenMonth(annualReport)}<br>`)
	document.write(`Сума за місяці, які є початковими у сезоні (весна, літо, осінь, зима): ${getFirstSeasonMonth(annualReport)}<br>`)
}

