"use strict";

/* Задача 0. Обчислити значення виразів
1) S1 = a + 12 + b
2) S2 = Math.sqrt((a + b) / 2 * a)
3) S3 = Math.cbrt((a + b) * c)
4) S4 = Math.sin(a / -b)
*/
const a = parseFloat(prompt('a ='));
const b = parseFloat(prompt('b ='));
const c = parseFloat(prompt('c ='));

const S1 = a + 12 + b;
const S2 = Math.sqrt((a + b) / (2 * a));
const S3 = Math.cbrt((a + b) * c);
const S4 = Math.sin(a / -b);

document.write(`Якщо a = ${a}, b = ${b}, c = ${c}, то:<br><br>
S1 = ${S1}<br>
S2 = ${S2}<br>
S3 = ${S3}<br>
S4 = ${S4}<br>
`);

