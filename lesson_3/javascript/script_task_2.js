"use script"

const price = parseFloat(prompt('Ціна товару в гривнях'))
const money = parseFloat(prompt('Кількість грошей в гривнях'))
const TICKET_PRICE = 4

const rest = money - price
const lack = price - money
const ticketsPossibility = Math.floor(rest / TICKET_PRICE)

if (money < price)
	document.write(`В покупці відмовлено, не вистачає ${lack} грн<br>`)
else if (rest >= TICKET_PRICE)
	document.write(`Дякуємо за покупку, на решту пропонуємо купити лотерейні білети, а саме ${ticketsPossibility}шт<br>`)
else
	document.write('Дякуємо за покупку!<br>')

