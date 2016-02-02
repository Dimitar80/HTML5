var btnLeft = document.querySelector('.left');
var btnRight = document.querySelector('.right');
var ul = document.querySelector('.wrap ul');

var margin = 0;

btnLeft.addEventListener('click', function(){
    if(margin > - calc(88.88%)){
        margin = margin - 11.11%;
        ul.style.marginLeft = margin + '%';
    }
});