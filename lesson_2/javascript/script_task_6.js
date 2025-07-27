"use strict";

const price1 = +parseFloat(prompt('Price of first product =')).toFixed(2);
const itemNumber1 = parseInt(prompt('Number of first product ='));
const price2 = +parseFloat(prompt('Price of second product =')).toFixed(2);
const itemNumber2 = parseInt(prompt('Number of second product ='));
const price3 = +parseFloat(prompt('Price of third product =')).toFixed(2);
const itemNumber3 = parseInt(prompt('Number of third product ='));

const sumFirstProduct = +(price1 * itemNumber1).toFixed(2);
const sumSecondProduct = +(price2 * itemNumber2).toFixed(2);
const sumThirdProduct = +(price3 * itemNumber3).toFixed(2);
const overallSum = +(sumFirstProduct + sumSecondProduct + sumThirdProduct).toFixed(2);

document.write(`
	<div class="check">
			<div class="check_header">
			<img src="../../src/img/silpo_logo.png" alt="Image">
			</div>
			<div class="check_body">
				<div class="check_row">
					<div class="check_item">Item 1</div>
					<div class="check_cost">${itemNumber1}*${price1}$=${sumFirstProduct}$</div>
				</div>
				<div class="check_row">
					<div class="check_item">Item 2</div>
					<div class="check_cost">${itemNumber2}*${price2}$=${sumSecondProduct}$</div>
				</div>
				<div class="check_row">
					<div class="check_item">Item 3</div>
					<div class="check_cost">${itemNumber3}*${price3}$=${sumThirdProduct}$</div>
				</div>
			</div>
			<div class="check_footer">
				<div class="check_row">
					<div class="check_item">SUM</div>
					<div class="check_cost">${overallSum}$</div>
				</div>
			</div>
		</div>
	`)