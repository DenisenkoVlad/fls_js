"use strict";

const lenghtCm = parseFloat(prompt('Lenght in centimeters ='));

const lenghtM = lenghtCm / 100;
const lenghtKm = lenghtCm / 100000;

document.write(`
	Lenght in centimeters = ${lenghtCm}cm<br>
	Lenght in meters = ${lenghtM}m<br>
	Lenght in kilometers = ${lenghtKm}km<br>
	`);

