var btnLeft = document.querySelector('.left');
var btnRight = document.querySelector('.right');
var ul = document.querySelector('.wrap ul');

var margin = 0;

//btnLeft.addEventListener('click', function(){
//    if(margin > - 166.66 ){
//        margin = margin - 33.33;
//        ul.style.marginLeft = margin + '%';
//    }
//    //if(margin < 0 ){
//    //    margin = margin + 33.33;
//    //    ul.style.marginLeft = margin + '%';
//    //}
//});


setInterval(function(){
    if(margin > -166.66){
        margin = margin - 33.33;
        ul.style.marginLeft = margin + '%';
    }else{
        margin = 0;
        ul.style.marginLeft = margin + '%';
    }
}, 5000);