"use script"

if (confirm('Start test # 6')) {
	function table(rowNum, colNum) {
		document.write('<table>')
		for (let rows = 1; rows <= rowNum; rows++) {
			document.write('<tr>')
			for (let columns = 1; columns <= colNum; columns++) {
				document.write('<td>cell</td>')
			}
			document.write('</tr>')
		}
		document.write('</table>')
	}

	const tableRowNum = parseInt(prompt('Введіть кількість рядків', '5')),
		tableColumnNum = parseInt(prompt('Введіть кількість стовпців', '4'))

	document.write(`Таблиця ${tableRowNum} x ${tableColumnNum}<br>`)
	let res = table(tableRowNum, tableColumnNum)
}