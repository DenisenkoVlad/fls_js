"use script"

const min = 1
const max = 5
const randomNumber = min + Math.floor(Math.random() * (max - min + 1))
console.log(randomNumber);

let guessNumber = parseInt(prompt('Введіть число від 1 до 5 (Підказка в console.log)'))

if (guessNumber == randomNumber)
	document.write('Вітаємо, Ви вгадали!!!<br>')
else {
	guessNumber = parseInt(prompt('Не вгадали... Спробуйте ще раз (Підказка в console.log)'))
	if (guessNumber == randomNumber)
		document.write('Вітаємо, Ви вгадали!!!<br>')
	else
		document.write(`Невдача... Загадане число - ${randomNumber}<br>`)
}






