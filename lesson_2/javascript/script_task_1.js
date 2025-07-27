"use strict"

const a = parseFloat(prompt('a ='));
const b = parseFloat(prompt('b ='));

const sum = a + b;
const product = a * b;
const division = a / b;

document.write(`Якщо a = ${a}, b = ${b}, то:<br><br>
<table>
	<tr>
		<td>sum</td>
		<td>product</td>
		<td>division</td>
	</tr>
	<tr>
		<td>${sum}</td>
		<td>${product}</td>
		<td>${division}</td>
	</tr>
</table>
`
)