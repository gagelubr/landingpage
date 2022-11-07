let countDate = new Date('jan 31, 2024 00:00:00').getTime();

function countDown() {
	let now = new Date().getTime();
	gap = countDate - now;

	let segundos = 1000;
	let minutos = segundos * 60;
	let hora = minutos * 60;
	let dia = hora * 24;

	let d = Math.floor(gap / (dia));
	let h = Math.floor((gap % (dia)) / (hora));
	let m = Math.floor((gap % (hora)) / (minutos));
	let s = Math.floor((gap % (minutos)) / (segundos));

	document.getElementById('dia').innerText = d;
	document.getElementById('hora').innerText = h;
	document.getElementById('minutos').innerText = m;
	document.getElementById('segundos').innerText = s;
}

setInterval(function(){
	countDown();
},1000)
