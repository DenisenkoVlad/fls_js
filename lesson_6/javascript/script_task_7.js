"use script"

if (confirm('Start test # 7')) {
	const startSum = parseInt(prompt('Введіть початкову суму депозиту в грн', '100'))
	const FIRST_TERM_PROFIT = 0.2
	const SECOND_TERM_PROFIT = 0.27
	let overallSum = 0

	let firstTermSum = startSum
	for (let years = 0; years < 20; years++) {
		firstTermSum = firstTermSum * FIRST_TERM_PROFIT + firstTermSum
	}

	overallSum += firstTermSum

	let secondTermSum = firstTermSum
	for (let years = 0; years < 17; years++) {
		secondTermSum = secondTermSum * SECOND_TERM_PROFIT + secondTermSum
	}
	overallSum += secondTermSum

	document.write(`Початковий депозит ${startSum.toFixed(2)} грн <br>
		***Щорічний прибуток додається до депозиту***<br>
		Отримано після першого періоду (це і є початковий вклад у другий депозит) ${firstTermSum.toFixed(2)} грн <br>
		Отримано після другого періоду ${secondTermSum.toFixed(2)} грн <br>
		Загальна сума через 37 років = ${overallSum.toFixed(2)} грн`)
}

