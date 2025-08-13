"use script"

if (confirm('Start test # 9')) {
	const userNum = parseInt(prompt('Введіть число від 1 до 10', '4'))
	let ranNum
	while (ranNum !== userNum) {
		ranNum = 1 + Math.floor(Math.random() * 10)
		console.log(ranNum);
		if (ranNum === userNum)
			alert(`Ура! Загадане число ${ranNum}`)
		else
			alert(`Число ${ranNum}! Не вгадав? Спробую ще раз...`)
	}
}