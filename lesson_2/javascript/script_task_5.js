"use strict";

const seconds = parseFloat(prompt('Seconds ='));

const minutes = seconds / 60;
const hours = seconds / 3600;

document.write(`
	Seconds = ${seconds}s<br>
	Minutes = ${minutes}min<br>
	Hours = ${hours}h<br>
	`);
