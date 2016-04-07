
var ul = document.querySelector('.wrap ul');

var margin = 0;
//*****************************************NE RABOTI KOMENTIRANIOT DEL OD KODOT**********************************************************************
//var btnFirst=document.querySelector('.first');
//btnFirst.addEventListener('click',function(){
//    margin=0;
//});



setInterval(function(){
    if(margin > -200){
        margin = margin - 100;
        ul.style.marginLeft = margin + '%';
    }else{
        margin = 0;
        ul.style.marginLeft = margin + '%';
    }
}, 5000);