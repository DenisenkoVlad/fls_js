"use script"

if (confirm('Start test # 3')) {
	function getSum(num1, num2, num3, num4) {
		let sum = num1 + num2 + num3 + num4
		return sum
	}
	function getProduct(num1, num2, num3, num4) {
		let product = num1 * num2 * num3 * num4
		return product
	}
	function getAvg(num1, num2, num3, num4) {
		let average = (num1 + num2 + num3 + num4) / 4
		return average
	}
	function getMin(num1, num2, num3, num4) {
		let min = num1
		if (num2 < min) min = num2
		if (num3 < min) min = num3
		if (num4 < min) min = num4
		return min
	}

	const n1 = parseInt(prompt('Введіть число № 1', '5')),
		n2 = parseInt(prompt('Введіть число № 2', '6')),
		n3 = parseInt(prompt('Введіть число № 3', '7')),
		n4 = parseInt(prompt('Введіть число № 4', '8'))

	let sumOfFour = getSum(n1, n2, n3, n4)
	let productOfFour = getProduct(n1, n2, n3, n4)
	let avgOfFour = getAvg(n1, n2, n3, n4)
	let minOfFour = getMin(n1, n2, n3, n4)

	document.write(`<h4>Для чисел: ${n1}, ${n2}, ${n3}, ${n4}</h4>
		Сума = ${sumOfFour}<br>
		Добуток = ${productOfFour}<br>
		Середнє арифметичне = ${avgOfFour}<br>
		Мінімальне значення = ${minOfFour}`)
}


