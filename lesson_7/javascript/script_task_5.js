"use script"

if (confirm('Start test # 5')) {
	function getSmToInches(value) {
		let smToInches = value / 2.54
		return smToInches
	}
	function getKgToLb(value) {
		let kgToLb = value / 0.454
		return kgToLb
	}
	function getKmToMiles(value) {
		let kmToMiles = value * 0.621371
		return kmToMiles
	}

	const sm = parseFloat(prompt('Введіть довжину в см', '385')),
		kg = parseFloat(prompt('Введіть вагу в кг', '72')),
		km = parseFloat(prompt('Введіть довжину в км', '3.5'))

	let inches = getSmToInches(sm)
	let pounds = getKgToLb(kg)
	let miles = getKmToMiles(km)

	document.write(`${sm} см = ${inches.toFixed(0)} дюймів<br>
		${kg} кг = ${pounds.toFixed(1)} фунтів<br>
		${km} км = ${miles.toFixed(2)} миль`)
}


