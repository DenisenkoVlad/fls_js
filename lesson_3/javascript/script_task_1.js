"use script"

const firstChildName = prompt("Ім'я першої дитини")
const secondChildName = prompt("Ім'я другої дитини")
const firstChildCandies = parseInt(prompt(`Скільки ${firstChildName} має цукерок?`))
const secondChildCandies = parseInt(prompt(`Скільки ${secondChildName} має цукерок?`))

if (firstChildCandies > secondChildCandies)
	document.write(`${firstChildName} має більше цукерок<br>`)
else if (firstChildCandies == secondChildCandies)
	document.write(`${firstChildName} та ${secondChildName} мають однаково цукерок<br>`)
else
	document.write(`${secondChildName} має більше цукерок<br>`)

