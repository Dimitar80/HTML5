/**
 * Created by Kristina Shalkoska on 12/18/2015.
 */
/*var sliki = document.getElementsByClassName('sliki');
 console.log(sliki);*/

/*for(var i=0;i<sliki.length;i++)
 {
 sliki[i].addEventListener('click',function(){


 });
 }*/

var ul = document.getElementsByClassName('sliki');
ul[0].addEventListener('click', function (e) {
    var li = document.getElementsByClassName("preview");
    li[0].style.backgroundImage = 'url("images/' + e.target.dataset.img + '")';
});
