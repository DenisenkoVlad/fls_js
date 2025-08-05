"use script"

const dayNumber = prompt('Введіть номер дня тижня від 1 до 7')
let dayName

switch (dayNumber) {
	case '1': dayName = 'Понеділок<br>'
		break;
	case '2': dayName = 'Вівторок<br>'
		break;
	case '3': dayName = 'Середа<br>'
		break;
	case '4': dayName = 'Четвер<br>'
		break;
	case '5': dayName = "П'ятниця<br>"
		break;
	case '6': dayName = 'Субота<br>'
		break;
	case '7': dayName = 'Неділя<br>'
		break;
	default: dayName = 'Некоректно введені дані<br>'
		break;
}
document.write(dayName)