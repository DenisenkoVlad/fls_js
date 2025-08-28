"use strict"

if (confirm('Start test # 8')) {
	const licencePlatesList = ['AA1111AA', 'AI222AI', 'KX333IA', 'XK444AA']
	document.write(`Номери авто: ${licencePlatesList}<br><br>`)

	const licencePlatesStartWithAList = licencePlatesList.filter(plate => plate[0].toUpperCase() === 'A')

	document.write(`Масив номерів, які починаються на "A": ${licencePlatesStartWithAList}`)
}