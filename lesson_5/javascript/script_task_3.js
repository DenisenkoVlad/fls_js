"use script"

if (confirm('Start test # 3')) {
	const colNum = 7
	document.write('<table><tr>')
	for (let number = 1; number <= colNum; number++) {
		document.write(`<td>${number}</td>`)
	}
}
document.write('</tr></table><br>')


