"use strict"

if (confirm('Start test # -1')) {
	for (let monthNum = 3; monthNum <= 8; monthNum++) {
		if (monthNum < 6)
			document.write(`Весна, місяць номер ${monthNum} <br>`)
		else
			document.write(`Літо, місяць номер ${monthNum} <br>`)
	}
}