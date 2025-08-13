"use script"

if (confirm('Start test # 14')) {
	const price = 200 + Math.floor(Math.random() * (300 - 200 + 1))
	alert(`Сума чеку: ${price} грн. Вводьте суму, поки загальна вартість не буде погашена`)
	let sum = 0
	let payment
	while (sum < price) {
		payment = parseInt(prompt(`Введіть платіж`, '100'))
		sum += payment
		if (sum < price)
			alert(`Залишилось внести: ${price - sum}`)
		else break
	}
	if (sum > price)
		document.write(`Ви оплатили всю суму: ${price} грн. Ваша решта: ${sum - price} грн. Дякуємо за покупку!`)
	else document.write(`Ви оплатили всю суму: ${price} грн. Дякуємо, що без решти!`)
}


