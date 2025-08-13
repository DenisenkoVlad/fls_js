"use script"

if (confirm('Start test # 10')) {
	const userNum1 = parseInt(prompt('Введіть перше число', '14'))
	const userNum2 = parseInt(prompt('Введіть друге число', '260'))
	let sum = 0
	for (let i = userNum1; i <= userNum2; i += 2) {
		if (i % 2 !== 0)
			sum += i
		else {
			i--
		}
	}
	document.write(`Сума всіх непарних чисел в межах ${userNum1} - ${userNum2} = ${sum}`)
}