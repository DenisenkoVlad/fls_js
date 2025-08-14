"use script"

if (confirm('Start test # 5')) {
	const height = parseInt(prompt('Введіть висоту трикутника', '20'))
	let space = '&nbsp'
	for (let i = 1; i <= height; i++) {
		document.write(`<span style="font-family: monospace;">${space.repeat(height - i)}${'^'.repeat(2 * i - 1)}${space.repeat(height - i)}</span><br>`)
	}
}

