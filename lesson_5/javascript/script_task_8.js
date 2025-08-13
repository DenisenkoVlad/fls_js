"use script"

if (confirm('Start test # 8')) {
	const userNum = parseInt(prompt('Введіть число від 1 до 10', '4'))
	let ranNum
	for (let attempt = 1; attempt <= 3; attempt++) {
		ranNum = 1 + Math.floor(Math.random() * 10)
		console.log(ranNum);
		if (ranNum === userNum) {
			document.write(`Комп'ютер вгадав Ваше число - ${userNum} і зробив це з ${attempt}-ї спроби`)
			break
		}
	}
	if (ranNum !== userNum)
		document.write(`Комп'ютер не вгадав. Ви загадали - ${userNum}`)
}

