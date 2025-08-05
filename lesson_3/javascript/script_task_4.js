"use script"

const age = parseInt(prompt('Введіть вік'))

if (age < 0)
	document.write('Некоректно введені дані<br>')
else if (age <= 5)
	document.write('Ви дитина<br>')
else if (age <= 17)
	document.write('Ви школяр<br>')
else if (age <= 23)
	document.write('Ви студент<br>')
else if (age < 60)
	document.write('Ви працівник<br>')
else
	document.write('Ви пенсіонер<br>')

