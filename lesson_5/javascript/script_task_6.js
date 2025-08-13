"use script"

if (confirm('Start test # 6')) {
	const colNum = 3
	const rowNum = 3
	let cell = 0
	for (let table = 0; table < 3; table++) {
		document.write('<table>')
		for (let rows = 1; rows <= rowNum; rows++) {
			document.write('<tr>')
			for (let columns = 1; columns <= colNum; columns++) {
				cell++
				document.write(`<td>${cell}</td>`)
			}
			document.write('</tr>')
		}
		document.write('</table>')
	}
}

