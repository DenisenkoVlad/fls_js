"use script"

const monthNumber = parseInt(prompt('Введіть номер місяця від 1 до 12'))

if (monthNumber < 1)
	document.write('Некоректно введені дані<br>')
else if (monthNumber <= 2)
	document.write('Зима<br>')
else if (monthNumber <= 5)
	document.write('Весна<br>')
else if (monthNumber <= 8)
	document.write('Літо<br>')
else if (monthNumber <= 11)
	document.write('Осінь<br>')
else if (monthNumber == 12)
	document.write('Зима<br>')
else
	document.write('Некоректно введені дані<br>')
console.log(monthNumber);
