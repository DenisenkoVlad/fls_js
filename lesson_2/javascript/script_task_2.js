"use script";

const birthYear = parseInt(prompt('Birth Year = ', '1995'));
const currentYear = parseInt(prompt('Current Year = ', '2025'));

const age = currentYear - birthYear;

document.write(`Age = ${age}<br>`);
