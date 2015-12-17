var btn1=document.querySelector('.btn1');
// console.log(btn1);
btn1.style.fontSize='50px';
btn1.style.fontWeight='bold';

var span1 = document.querySelector('.green');
// console.log('span1');
span1.style.backgroundColor='green';

span1.addEventListener('click',function(){
	alert('Klik!!!');
});
btn1.addEventListener('click',function(){
	span1.style.fontSize='100px';
});

/******************************************************************************/
var gradovi=document.querySelectorAll('.gradovi li');
console.log(gradovi);
console.log(gradovi.length);

for (var i=0; i < gradovi.length; i++){
	// console.log('grad!');
	// console.log(gradovi[i]);
	// console.log(gradovi[i].innerText);

// 	gradovi[i].addEventListener('click',function() {
// 		// body...
// 		alert(this.innerText);
// 	});
// }

/******Sliki******/
gradovi[i].addEventListener('click',function(){
	// alert(this.dataset.img);
	var sliki=document.querySelectorAll('.images img');
	for (var i = 0; i < sliki.length; i++) {
		sliki[i].style.display='none';
	};
	
	document.querySelector('.'+ this.dataset.img).style.display='inline';
	});
}