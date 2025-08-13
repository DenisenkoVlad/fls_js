"use strict"

if (confirm('Start test # 0')) {
	for (let button = 1; button <= 8; button++) {
		document.write(`<button type="submit" class="button">Кнопка ${button}</button><br><br>`)
	}
}