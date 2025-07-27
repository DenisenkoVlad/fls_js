"use strict";

const price = +parseFloat(prompt('Price =')).toFixed(2);
const itemNumber = parseInt(prompt('Items ='));

const cost = +(price * itemNumber).toFixed(2);
const tax = (cost * 0.05).toFixed(2);

document.write(`
	Price = ${price}$, items = ${itemNumber}pcs<br><br>
	Cost = ${cost}$<br>
	Including tax = ${tax}$<br>
	`);