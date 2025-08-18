"use script"

if (confirm('Start test # 4')) {
	function getMultiRes(num1, num2, num3) {
		let evenCount = 0
		let positiveCount = 0
		let bigCount = 0
		if (num1 % 2 === 0) evenCount++
		if (num2 % 2 === 0) evenCount++
		if (num3 % 2 === 0) evenCount++
		if (num1 > 0) positiveCount++
		if (num2 > 0) positiveCount++
		if (num3 > 0) positiveCount++
		if (num1 > 100) bigCount++
		if (num2 > 100) bigCount++
		if (num3 > 100) bigCount++
		return document.write(`<h4>Серед чисел: ${num1}, ${num2}, ${num3}</h4>
			Парних: ${evenCount}<br>
			Додатніх: ${positiveCount}<br>
			Більше 100: ${bigCount}<br>
			`)
	}

	const n1 = parseInt(prompt('Введіть число № 1', '-20')),
		n2 = parseInt(prompt('Введіть число № 2', '30')),
		n3 = parseInt(prompt('Введіть число № 3', '101'))

	let res = getMultiRes(n1, n2, n3)
}


