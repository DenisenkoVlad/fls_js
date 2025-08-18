"use script"

if (confirm('Start test # 7')) {
	function getImg(imgId) {
		let imgSrc
		switch (imgId) {
			case 1:
				imgSrc = '<img style="width:200px;" src=../img/task_7-8/banana.png alt="Image">'
				break;
			case 2:
				imgSrc = '<img style="width:200px;" src=../img/task_7-8/cherry.png alt="Image">'
				break;
			case 3:
				imgSrc = '<img style="width:200px;" src=../img/task_7-8/grape.png alt="Image">'
				break;
			default:
				imgSrc = '<img style="width:200px;" src=../img/task_7-8/watermelon.png alt="Image">'
				break;
		}
		return imgSrc
	}
	const randImgNum = 1 + Math.floor(Math.random() * 4)
	let res = getImg(randImgNum)
	document.write(`${res}`)
}

