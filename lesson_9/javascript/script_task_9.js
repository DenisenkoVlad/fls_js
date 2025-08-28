"use strict"

if (confirm('Start test # 9')) {
	const namesList = ['Влад', 'Анна', 'Марія', 'Наталія']
	document.write(`Масив імен: ${namesList}<br><br>`)

	const firstLettersList = namesList.map(name => name[0])

	document.write(`Масив з перших літер імен: ${firstLettersList}`)
}