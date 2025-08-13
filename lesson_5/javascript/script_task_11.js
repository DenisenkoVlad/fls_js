"use script"

if (confirm('Start test # 11')) {
	const userNum1 = parseInt(prompt('Введіть перше число', '14'))
	const userNum2 = parseInt(prompt('Введіть друге число', '260'))
	let sum = 0
	exit: for (let i = 0; i < 5; i++) {
		for (let oddNum = userNum1; oddNum <= userNum2; oddNum++) {
			let ranNum = userNum1 + Math.floor(Math.random() * (userNum2 - userNum1 + 1))
			console.log(ranNum);
			if (ranNum % 2 !== 0) {
				sum += ranNum
				continue exit
			}
		}
	}
	document.write(`Сума п'яти випадкових непарних чисел в межах ${userNum1} - ${userNum2} = ${sum}`)
}
