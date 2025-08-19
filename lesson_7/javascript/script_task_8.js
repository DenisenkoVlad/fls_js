"use script"

if (confirm('Start test # 8')) {
	function banner(img, header, link) {
		document.write(`<h3>${header}</h3>
		<a href="${link}"><img style="width:200px;" src="${img}" alt="Image"></a>`)
	}

const ranImg = 1 + Math.floor(Math.random() * 1)
let imgSrc
switch (ranImg) {
	case 1:
		imgSrc = '../img/task_7-8/banana.png'
		break;
	case 2:
		imgSrc = '../img/task_7-8/cherry.png'
		break;
	case 3:
		imgSrc = '../img/task_7-8/grape.png'
		break;
	default:
		imgSrc = '../img/task_7-8/watermelon.png'
		break;
}
const headerText = prompt('Введіть заголовок', 'Загаловок')
const BANNER_LINK = './task_8_2.html'

let res = banner(imgSrc, headerText, BANNER_LINK)
}
