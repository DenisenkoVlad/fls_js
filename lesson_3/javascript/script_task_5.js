"use script"

const licenseСategory = prompt('Введіть категорію свого водійського посвідчення (латиницею A, B, C)').toUpperCase()
let yourLicense

switch (licenseСategory) {
	case 'A': yourLicense = 'Ви можете водити мотоцикл<br>'
		break;
	case 'B': yourLicense = 'Ви можете водити легковий автомобіль<br>'
		break;
	case 'C': yourLicense = 'Ви можете водити вантажний автомобіль<br>'
		break;
	default: yourLicense = 'Некоректно введені дані<br>'
		break;
}
document.write(yourLicense)