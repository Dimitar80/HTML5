var sliki=['golema1.jpg',
			'golema2.jpg',
			'golema3.jpg',
			'golema4.jpg',
			'golema5.jpg',
			];

var brojac=0;
var slika=document.querySelector('#slika');			

setInterval(function(){
	if(sliki[brojac]==undefined){
		brojac=0;
	}
	slika.src='images/' + sliki[brojac];
	brojac++;
},1000);