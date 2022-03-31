// переключение между страницами квиза
let bottom_1 = document.getElementById('bottom-1');
let bottom_2 = document.getElementById('bottom-2');
let bottom_3 = document.getElementById('bottom-3');
let bottom_4 = document.getElementById('bottom-4');
let bottom_5 = document.getElementById('bottom-5');
let bottom_6 = document.getElementById('bottom-6');

let form_1 = document.getElementById('form-1');
let form_2 = document.getElementById('form-2');
let form_3 = document.getElementById('form-3');
let form_4 = document.getElementById('form-4');
let form_5 = document.getElementById('form-5');
let form_6 = document.getElementById('form-6');
let form_7 = document.getElementById('form-7');


let back_2 = document.getElementById('back-2');
let back_3 = document.getElementById('back-3');
let back_4 = document.getElementById('back-4');
let back_5 = document.getElementById('back-5');
let back_6 = document.getElementById('back-6');

let next_1 = document.getElementById('next-1');
let next_2 = document.getElementById('next-2');
let next_3 = document.getElementById('next-3');
let next_4 = document.getElementById('next-4');
let next_5 = document.getElementById('next-5');
let next_6 = document.getElementById('next-6');


bottom_1.onclick = function (event) {
	target = event.target;

	if (target == next_1) {
		hide(form_1)
		show(form_2)
	}
}

bottom_2.onclick = function (event) {
	target = event.target;

	if (target == next_2) {
		hide(form_2)
		show(form_3)
	}

	else if (target == back_2) {
		hide(form_2)
		show(form_1)
	}
}

bottom_3.onclick = function (event) {
	target = event.target;

	if (target == next_3) {
		hide(form_3)
		show(form_4)
	}

	else if (target == back_3) {
		hide(form_3)
		show(form_2)
	}
}

bottom_4.onclick = function (event) {
	target = event.target;

	if (target == next_4) {
		hide(form_4)
		show(form_5)
	}

	else if (target == back_4) {
		hide(form_4)
		show(form_3)
	}
}

bottom_5.onclick = function (event) {
	target = event.target;

	if (target == next_5) {
		hide(form_5)
		show(form_6)
	}

	else if (target == back_5) {
		hide(form_5)
		show(form_4)
	}
}

bottom_6.onclick = function (event) {
	target = event.target;

	if (target == next_6) {
		hide(form_6)
		show(form_7)
	}

	else if (target == back_6) {
		hide(form_6)
		show(form_5)
	}
}


function hide(element) {
	element.classList.remove('display');
	element.classList.add('hidden');
}

function show(element) {
	element.classList.remove('hidden');
	element.classList.add('display');
}

// шаг 3 и 6
let input_range_1 = document.querySelectorAll('.input__range')[0];
let input_range_2 = document.querySelectorAll('.input__range')[1];
let input_range_3 = document.querySelectorAll('.input__range')[2];
let input_range_4 = document.querySelectorAll('.input__range')[3];
let input_range_5 = document.querySelectorAll('.input__range')[4];
let input_range_6 = document.querySelectorAll('.input__range')[5];

function range(element) {
	if (element == input_range_3) {
		val = element.value * 4
		tr = document.querySelectorAll('.input__range-value')[2];
		tr.style.left = '' + element.value * 45 + 'px';
	}
	else if (element == input_range_1 || element == input_range_2) {
		val = element.value * 0.4
		if (element == input_range_1) {
			tr = document.querySelectorAll('.input__range-value')[0];
		}
		else if (element == input_range_2) {
			tr = document.querySelectorAll('.input__range-value')[1];
		}
		else if (element == input_range_3) {
			tr = document.querySelectorAll('.input__range-value')[2];
		}
		tr.style.left = '' + element.value * 4.5 + 'px';
	}

	else {
		val = element.value * 2
		if (element == input_range_4) {
			tr = document.querySelectorAll('.input__range-value')[3];
		}
		else if (element == input_range_5) {
			tr = document.querySelectorAll('.input__range-value')[4];
		}
		else if (element == input_range_6) {
			tr = document.querySelectorAll('.input__range-value')[5];
		}
		tr.style.left = '' + element.value * 22.5 + 'px';
	}

	element.style.background = '-webkit-linear-gradient(left, var(--blue) 0%, var(--blue) ' + val + '%, #C4C4C4 ' + val + '%, #C4C4C4 100%)';
	tr.style.display = 'block';
	tr.innerHTML = element.value
}

// выбор фото
let inputs = document.getElementsByClassName('buildings__input');

let input__1 = inputs[0];
let input__2 = inputs[1];
let input__3 = inputs[2];
let input__4 = inputs[3];
let input__5 = inputs[4];
let input__6 = inputs[5];
let input__7 = inputs[6];
let input__8 = inputs[7];
let input__9 = inputs[8];
let input__10 = inputs[9];
let input__11 = inputs[10];

let img_1 = document.getElementById('img-1');
let img_2 = document.getElementById('img-2');
let img_3 = document.getElementById('img-3');
let img_4 = document.getElementById('img-4');
let img_5 = document.getElementById('img-5');
let img_6 = document.getElementById('img-6');
let img_7 = document.getElementById('img-7');
let img_8 = document.getElementById('img-8');
let img_9 = document.getElementById('img-9');
let img_10 = document.getElementById('img-10');
let img_11 = document.getElementById('img-11');

let tick = 'url(img/tick.png)';

img_1.onclick = function () {
	input__1.checked = !0;
	input__1.style.backgroundImage = tick;
	for (i of inputs) {
		if (i == input__1) {
			continue
		}
		else {
			i.style.backgroundImage = 'none';
		}
	}
}

img_2.onclick = function () {
	input__2.checked = !0;
	input__2.style.backgroundImage = tick;
	for (i of inputs) {
		if (i == input__2) {
			continue
		}
		else {
			i.style.backgroundImage = 'none';
		}
	}
}

img_3.onclick = function () {
	input__3.checked = !0;
	input__3.style.backgroundImage = tick;
	for (i of inputs) {
		if (i == input__3) {
			continue
		}
		else {
			i.style.backgroundImage = 'none';
		}
	}
}

img_4.onclick = function () {
	input__4.checked = !0;
	input__4.style.backgroundImage = tick;
	for (i of inputs) {
		if (i == input__4) {
			continue
		}
		else {
			i.style.backgroundImage = 'none';
		}
	}
}

img_5.onclick = function () {
	input__5.checked = !0;
	input__5.style.backgroundImage = tick;
	for (i of inputs) {
		if (i == input__5) {
			continue
		}
		else {
			i.style.backgroundImage = 'none';
		}
	}
}

img_6.onclick = function () {
	input__6.checked = !0;
	input__6.style.backgroundImage = tick;
	for (i of inputs) {
		if (i == input__6) {
			continue
		}
		else {
			i.style.backgroundImage = 'none';
		}
	}
}

img_7.onclick = function () {
	input__7.checked = !0;
	input__7.style.backgroundImage = tick;
	for (i of inputs) {
		if (i == input__7) {
			continue
		}
		else {
			i.style.backgroundImage = 'none';
		}
	}
}

img_8.onclick = function () {
	input__8.checked = !0;
	input__8.style.backgroundImage = tick;
	for (i of inputs) {
		if (i == input__8) {
			continue
		}
		else {
			i.style.backgroundImage = 'none';
		}
	}
}

img_9.onclick = function () {
	input__9.checked = !0;
	input__9.style.backgroundImage = tick;
	for (i of inputs) {
		if (i == input__9) {
			continue
		}
		else {
			i.style.backgroundImage = 'none';
		}
	}
}

img_10.onclick = function () {
	input__10.checked = !0;
	input__10.style.backgroundImage = tick;
	for (i of inputs) {
		if (i == input__10) {
			continue
		}
		else {
			i.style.backgroundImage = 'none';
		}
	}
}

img_11.onclick = function () {
	input__11.checked = !0;
	input__11.style.backgroundImage = tick;
	for (i of inputs) {
		if (i == input__11) {
			continue
		}
		else {
			i.style.backgroundImage = 'none';
		}
	}
}