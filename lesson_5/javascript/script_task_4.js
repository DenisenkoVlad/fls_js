"use script"

if (confirm('Start test # 4')) {
	const colNum = 7
	const rowNum = 3
	document.write('<table>')
	for (let rows = 1; rows <= rowNum; rows++) {
		document.write('<tr>')
		for (let columns = 1; columns <= colNum; columns++) {
			document.write(`<td>${columns}</td>`)
		}
		document.write('</tr>')
	}
	document.write('</table><br>')
}


