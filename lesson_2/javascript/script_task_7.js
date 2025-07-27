"use strict";

const monthMin = 1;
const monthMax = 12;
const dayMin = 0;
const dayMax = 6;

const monthRandom = monthMin + Math.floor(Math.random() * (monthMax - monthMin + 1));
const dayRandom = dayMin + Math.floor(Math.random() * (dayMax - dayMin + 1));
const sum = monthRandom + dayRandom;

document.write(`
	Random month number (1 to 12) = ${monthRandom}<br>
	Random day number (0 to 6) = ${dayRandom}<br>
	Sum = ${sum}<br>
	`);