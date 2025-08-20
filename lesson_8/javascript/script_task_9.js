"use script"

if (confirm('Start test # 9')) {
	const battleshipFieldSize = parseInt(prompt('Введіть кількість клітинок для гри', '4'))
	const battleshipShipNum = parseInt(prompt(`Введіть кількість кораблів для гри від 1 до ${battleshipFieldSize}`, '2'))

	function getBattleshipFieldArr(fieldSize, shipNum) { // Функція рандомного заповнення масиву з виграшними сумами від -500 до 500
		let battleshipFieldArr = []
		battleshipFieldArr.length = fieldSize // Вказуємо чітку кількість елементів масиву для майбутнього заповнення пустих мість нулями
		for (let i = 0; i < shipNum; i++) { // Цикл заповнення кораблів (1) в рандомні місця масиву
			const randCell = 0 + Math.floor(Math.random() * fieldSize)
			if (battleshipFieldArr[randCell] !== 1) // Вписуємо 1 в клітинку, тільки якщо там вже не стоїть 1 (якщо згенероване те ж саме число), а інакше - повторюємо цикл на один раз більше
				battleshipFieldArr[randCell] = 1
			else i--
		}
		for (let y = 0; y < battleshipFieldArr.length; y++) { // Цикл заповнення решти порожніх елементів масиву нулями
			if (battleshipFieldArr[y] !== 1) {
				battleshipFieldArr[y] = 0;
			}
		}
		console.log(battleshipFieldArr);
		return battleshipFieldArr
	}

	function game(gameFieldArr) {
		let ships = battleshipShipNum
		let shipPositions = []
		do {
			const shoot = parseInt(prompt(`Введіть координати для пострілу від 1 до ${battleshipFieldSize}`, '2'))
			if (gameFieldArr[shoot - 1] === 2) { // Для цікавості гри і комунікації з користувачем
				alert(`Ви вже втопили корабель в цій клітинці раніше`)
				continue
			}
			if (gameFieldArr[shoot - 1] === 1) {
				ships--
				gameFieldArr[shoot - 1] = 2 // Додаткове значення для розуміння, що тут вже потоплений корабель
				shipPositions.push(shoot)
				if (ships !== 0)
					alert(`Ви влучили! Залишилось кораблів: ${ships}`)
			}
			else alert(`Не влучили...Спробуйте ще`)
		}
		while (ships !== 0)
		return shipPositions
	}

	const battleshipField = getBattleshipFieldArr(battleshipFieldSize, battleshipShipNum)
	const gameStart = game(battleshipField)
	document.write(`Вітаємо! Ви перемогли! Кораблі знаходились в клітинках (в порядку знищення): ${gameStart}`)
	console.log(battleshipField);

}