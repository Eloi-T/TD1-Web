'use strict';

// M413 - TD1
let message = 'JavaScript is ok :)';
// alert( message);
console.log(message);

function onLoad() {
	console.log( 'In onLoad() function…');
	// Your JavaScript code goes here !
	function defineHeading1() {
		document.getElementById('title').innerHTML = 'TD1 - M413';
		document.title = 'TD1 - M413 modifié';
	}

	function defineH() {
		document.getElementsByTagName("h2")[0].innerHTML = 'h2 modif';
	}

	function lastH2() {
			document.getElementsByTagName("h2")[document.getElementsByTagName("h2").length - 1].innerHTML = 'h2 modif';
	}
	function defineHeading3() {
		if ((document.getElementsByTagName("h2").length-1) > 0) {
			document.getElementsByTagName("h2")[document.getElementsByTagName("h2").length - 1].innerHTML = 'h2 modif';
		}else{
			document.title = 'Eloi Terrol';
		}
	}

	function defineHeading4() {

		if ((document.getElementsByClassName("firstOrLast").length-1)%2 == 0) {
			document.title = document.getElementsByClassName("firstOrLast")[0].innerHTML;
		}
	}
	
	function swapInnerHTML() {
		let tmp;
		tmp = document.getElementsByTagName("p")[0].innerHTML
		document.getElementsByTagName("p")[0].innerHTML = document.getElementsByTagName("p")[1].innerHTML;
		document.getElementsByTagName("p")[1].innerHTML = tmp;
	}

	function dateAlter(){
		var derniereModif = new Date(document.lastModified);
		let month=["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
		let day=["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
		const texte = "Dernière modification : " + day[derniereModif.getDay()-1] + " " + derniereModif.getDate() + " " + month[derniereModif.getMonth()] + " " + derniereModif.getFullYear() + " par " + document.querySelector('meta[name]').getAttribute('content');
		// le vendredi 18 janvier 2021 par Nom Prénom
		document.getElementsByName("update-date")[0].innerHTML = texte;
	}

	function getNbDays(){
		const now = Date.now();
		const vacances = Date.parse('19 Jul 2023 00:00:00 GMT');
		const dif = vacances - now;
		const waiting = dif/1000/60/60/24;
		document.getElementById('vacances').textContent=`Il reste ${waiting | 0} jours avant le 19 juillet 2023 `
	}

	//use setIntervalle
	function updateClock1(){
		//display time on "hh:mm:ss" format using setInterval
		window.setInterval(function(){
			var date = new Date();
			var heure = date.getHours();
			var minute = date.getMinutes();
			var seconde = date.getSeconds();
			var horloge = heure + ":" + minute + ":" + seconde;
			document.getElementById('clock1').innerHTML = horloge;
		},1000);
	}

	//use setTimeout
	function updateClock2(){
		//display time on "hh:mm:ss" format using setTimeout
		var date = new Date();
		var heure = date.getHours();
		var minute = date.getMinutes();
		var seconde = date.getSeconds();
		var horloge = heure + ":" + minute + ":" + seconde;
		document.getElementById('clock2').innerHTML = horloge;
		setTimeout(updateClock2, 1000);

	}

	function updateGraphicClock(){
		//display time on graphic clock
		var date = new Date();
		var heure = date.getHours();
		var minute = date.getMinutes();
		var seconde = date.getSeconds();
		if (heure.toString().length<2){
			document.getElementById("hour1").src = '../assets/images/0.gif';
			document.getElementById("hour2").src = '../assets/images/'+heure.toString()[0]+'.gif';
			setTimeout(updateGraphicClock,1000);
		}else{
			document.getElementById("hour1").src = '../assets/images/0.gif';
			document.getElementById("hour2").src = '../assets/images/'+heure.toString()[0]+'.gif';
			setTimeout(updateGraphicClock,1000);
		}
		if (minute.toString().length<2){
			document.getElementById("min1").src = '../assets/images/0.gif';
			document.getElementById("min2").src = '../assets/images/'+minute.toString()[0]+'.gif';
		}else{
			document.getElementById("min1").src = '../assets/images/'+minute.toString()[0]+'.gif';
			document.getElementById("min2").src = '../assets/images/'+minute.toString()[1]+'.gif';
		}
		if (seconde.toString().length<2){
			document.getElementById("sec1").src = '../assets/images/0.gif';
			document.getElementById("sec2").src = '../assets/images/'+seconde.toString()[0]+'.gif';
		}else{
			document.getElementById("sec1").src = '../assets/images/'+seconde.toString()[0]+'.gif';
			document.getElementById("sec2").src = '../assets/images/'+seconde.toString()[1]+'.gif';
		}
	}

	function changeColor(){
		document.getElementById("color").addEventListener("input", function(){
			if (isNaN(document.getElementById("color").value)){
				document.getElementById("color").setAttribute("class","red");
				//console.log("1red");
			}
			else if (document.getElementById("color").value==""){
				document.getElementById("color").setAttribute("class","white");
				//console.log("2white");
			}
			else if (!isNaN(document.getElementById("color").value)){
				document.getElementById("color").setAttribute("class","green");
				//console.log("3green");
			}
		});
	}

	function scrollingMenu(){
		//scrolling menu
		window.addEventListener("scroll", function(){
			var header = document.querySelector("header");
			header.classList.toggle("sticky", window.scrollY > 0);
		});
	}



	defineHeading1();
	//defineH();
	//lastH2();
	defineHeading3();
	defineHeading4();
	swapInnerHTML()
	dateAlter();
	getNbDays();
	updateClock1();
	updateClock2();
	updateGraphicClock();
	changeColor();


}

