"use script"

if (confirm('Start test # 7')) {
	const blockNum = parseInt(prompt('Введіть кількість абзаців)', '3'))
	block: for (let h = 1; h <= blockNum; h++) {
		document.write(`<h2>Заголовок ${h}</h2>`)
		for (let p = 1; p <= blockNum; p++) {
			document.write(`<p>Розділ ${h}, параграф ${p}</p>`)
			if (p === h) {
				document.write(`<hr>`)
				continue block
			}
		}
	}
}

