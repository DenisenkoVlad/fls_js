"use strict"

if (confirm('Start test # -2')) {
	let eveNum = 0, oddNum = 0, randNum

	for (let i = 0; i < 100; i++) {
		randNum = 1 + Math.floor(Math.random() * 1000)
		if (randNum % 2 === 0)
			eveNum++
		else
			oddNum++
	}

	document.write(`Парних - ${eveNum} <br>`)
	document.write(`Непарних - ${oddNum} <br>`)
}