"use script"

if (confirm('Start test # 2')) {
	for (let column = 1; column <= 10; column++) {
		document.write(`Product #${column} <input type="text"><br>`)
	}
}
